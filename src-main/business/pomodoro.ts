import { clockHelper } from '../helpers/clock';
import { Notifier } from '../helpers/notifier';
import { PomodoroInfo, PomodoroCycle } from '../ipcTypes/pomodoro';

export interface PomodoroMap {
  cycleEnd: (cycle: PomodoroCycle) => void;
  tick: (actor: PomodoroInfo) => void;
}

export class Pomodoro extends Notifier<PomodoroMap> implements PomodoroInfo {
  private _startedAt: Date = new Date(0); // The date where a cycle begun.
  private _pauseCycle: -1 | PomodoroCycle = -1; // The cycle that was running when the action pause was called.
  private _beforePause: number = 0; // Amount of miliseconds passed before a pause action.
  private _currentCycleDuration: number = 0;
  private _currentCycle: PomodoroCycle = 0;

  /**
   * Enables or disables this feature.
   */
  enabled: boolean;

  /**
   * Defines if an audio should play at the end of a cycle
   */
  audioEnabled: boolean;

  /**
   * Audio file to play at the end of a cycle.
   */
  audioFilename: string;

  /**
   * Defines if an should lock all screens (with an image) at the end of a cycle.
   */
  screenLockEnabled: boolean;

  /**
   * An image to be display on screen lock.
   */
  screenLockFilename: string;

  /**
   * This option is valid only if screen lock is enabled. Determines if at a cycle end will the next cycle begin automatically or it'll wait on screen lock close event.
   */
  waitScreenLockClosed: boolean;

  /**
   * Time in minutes of a dedicated activity.
   */
  pomodoroDuration: number;

  /**
   * Time in minutes of a short break.
   */
  shortBreakDuration: number;

  /**
   * Time in minutes of a long break.
   */
  longBreakDuration: number;

  /**
   * Get the number of the current cycle. Value between 0 to 7.
   * Even numbers are pomodoros odd numbers are breaks.
   */
  get currentCycle() { return this._currentCycle; }

  /**
   * Set the number of the current cycle. Value between 0 to 7.
   * Even numbers are pomodoros odd numbers are breaks.
   */
  set currentCycle(value: PomodoroCycle) {
    this._currentCycle = value;
    this._currentCycleDuration = this.getCycleDuration(this._currentCycle);
  }

  /**
   * Get the duration of the current cycle.
   */
  get currentCycleDuration() { return this._currentCycleDuration; }

  /**
   * The amout of milliseconds passed from start to now.
   */
  get currentTime() {
    return this.enabled
      ? clockHelper.getElapsed(this._startedAt)
      : this._beforePause;
  }

  constructor() {
    super();
    this.enabled = false;
    this.audioEnabled = true;
    this.audioFilename = 'D:\\hello.wav';
    this.screenLockEnabled = false;
    this.screenLockFilename = 'D:\\Pictures\\Wallpaper\\wp04.jpg';
    this.waitScreenLockClosed = true;
    this.pomodoroDuration = .25;
    this.shortBreakDuration = .01;
    this.longBreakDuration = .5;
    this.currentCycle = 0;

    clockHelper.addEventListener('tick', this.tick.bind(this));
  }

  /**
   * Get the duration in milliseconds of the cycle.
   * @param cycle The cycle number.
   */
  private getCycleDuration(cycle: PomodoroCycle) {
    switch (cycle) {
      case 0:
      case 2:
      case 4:
      case 6:
        return clockHelper.minutesToMilliseconds(this.pomodoroDuration);
      case 1:
      case 3:
      case 5:
        return clockHelper.minutesToMilliseconds(this.shortBreakDuration);
      case 7:
        return clockHelper.minutesToMilliseconds(this.longBreakDuration);
      default:
        return 0;
    }
  }

  start() {
    this.enabled = true;
    this._startedAt = new Date();

    // If the clock was previously paused in the same cycle, resume the clock from where was paused.
    if (this._beforePause > 0 && this._beforePause < this.currentCycleDuration && this.currentCycle === this._pauseCycle) {
      this._startedAt.setMilliseconds(this._startedAt.getMilliseconds() - this._beforePause);
    }

    this._beforePause = 0;
    this._pauseCycle = -1;

    if (!clockHelper.enabled) clockHelper.start();
  }

  pause() {
    this.enabled = false;
    this._beforePause = clockHelper.getElapsed(this._startedAt);
    if (this._beforePause > this.currentCycleDuration) this._beforePause = this.currentCycleDuration;
    this._pauseCycle = this.currentCycle;
  }

  tick() {
    if (!this.enabled) return;

    this.dispatchEvent('tick', this);

    if (this.currentTime > this.currentCycleDuration) {
      this.pause();
      this.dispatchEvent('cycleEnd', this.currentCycle);
    }
  }

  getInfo() {
    return {
      enabled: this.enabled,
      audioEnabled: this.audioEnabled,
      audioFilename: this.audioFilename,
      screenLockEnabled: this.screenLockEnabled,
      screenLockFilename: this.screenLockFilename,
      waitScreenLockClosed: this.waitScreenLockClosed,
      pomodoroDuration: this.pomodoroDuration,
      shortBreakDuration: this.shortBreakDuration,
      longBreakDuration: this.longBreakDuration,
      currentCycle: this.currentCycle,
      currentCycleDuration: this.currentCycleDuration,
      currentTime: this.currentTime
    } as PomodoroInfo;
  }

  updateInfo(config: PomodoroInfo) {
    this.enabled = config.enabled;
    this.audioEnabled = config.audioEnabled;
    this.audioFilename = config.audioFilename;
    this.screenLockEnabled = config.screenLockEnabled;
    this.screenLockFilename = config.screenLockFilename;
    this.waitScreenLockClosed = config.waitScreenLockClosed;
    this.pomodoroDuration = config.pomodoroDuration;
    this.shortBreakDuration = config.shortBreakDuration;
    this.longBreakDuration = config.longBreakDuration;
    this.currentCycle = config.currentCycle;
  }
}

export const pomodoro = new Pomodoro();