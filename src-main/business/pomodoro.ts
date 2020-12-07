import { clockHelper } from '../helpers/clock';
import { Notifier } from '../helpers/notifier';
import { PomodoroInfo, PomodoroCycle } from '../ipcTypes/pomodoro';
import { Notification } from './notification';

export interface PomodoroMap {
  cycleEnd: (cycle: PomodoroCycle) => void;
  tick: () => void;
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
 * Configuration about the notification of end of each pomodoro cycle.
 */
  pomodoroNotification: Notification;

  /**
   * Configuration about the notification of end of each short break.
   */
  shortBreakNotification: Notification;

  /**
   * Configuration about the notification of end of each long break.
   */
  longBreakNotification: Notification;

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
    this.pomodoroDuration = .25;
    this.shortBreakDuration = .01;
    this.longBreakDuration = .5;
    this.currentCycle = 0;

    this.pomodoroNotification = new Notification('D:\\Downloads\\drinkWater.mp3', 'D:\\Pictures\\Wallpaper\\wp04.jpg');
    this.shortBreakNotification = new Notification('D:\\Downloads\\drinkWater.mp3', 'D:\\Pictures\\Wallpaper\\wp04.jpg');
    this.longBreakNotification = new Notification('D:\\Downloads\\drinkWater.mp3', 'D:\\Pictures\\Wallpaper\\wp04.jpg');

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

    this.dispatchEvent('tick');

    if (this.currentTime > this.currentCycleDuration) {
      this.pause();
      this.dispatchEvent('cycleEnd', this.currentCycle);
    }
  }

  getInfo() {
    return JSON.parse(JSON.stringify(this)) as PomodoroInfo;
  }

  setInfo(info: PomodoroInfo) {
    this.enabled = info.enabled;
    this.pomodoroDuration = info.pomodoroDuration;
    this.shortBreakDuration = info.shortBreakDuration;
    this.longBreakDuration = info.longBreakDuration;
    this.currentCycle = info.currentCycle;

    if (info.pomodoroNotification) {
      this.pomodoroNotification.update(info.pomodoroNotification);
    }

    if (info.shortBreakNotification) {
      this.shortBreakNotification.update(info.shortBreakNotification);
    }

    if (info.pomodoroNotification) {
      this.longBreakNotification.update(info.longBreakNotification);
    }
  }
}

export const pomodoro = new Pomodoro();