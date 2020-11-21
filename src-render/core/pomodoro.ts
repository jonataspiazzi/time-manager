import { ClockHelper } from '../helpers/clockHelper';
import { Notifier } from '../helpers/notifier';

export type PomodoroCycle = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface PomodoroMap {
  cycleEnd: (cycle: PomodoroCycle) => void;
}

export class Pomodoro {
  private _startedAt: Date; // The date where a cycle begun.
  private _pauseCycle: -1 | PomodoroCycle = -1; // The cycle that was running when the action pause was called.
  private _beforePause: number = 0; // Amount of miliseconds passed before a pause action.
  private _currentTime: number = 0;
  private _clockDisplay: string = '00:00'; // A string to represent the current state of the clock.
  private _currentCycleDuration: number;
  private _currentCycle: PomodoroCycle;
  private _timeout: number | NodeJS.Timeout = 0;
  private _events = new Notifier<PomodoroMap>();

  /**
   * An event propagator.
   */
  get events() {
    return this._events;
  }

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
   * Determines if the clock is running or is paused.
   */
  paused: boolean;

  /**
   * If true the clock will automatically update each second.
   */
  autoUpdate: boolean;

  /**
   * Get a string representation of the current state of the clock.
   */
  get clock() { return this._clockDisplay; }

  /**
   * Get a value representing the current time inside the cycle.
   */
  get currentTime() { return this._currentTime; }

  constructor() {
    this.enabled = false;
    this.pomodoroDuration = .25;
    this.shortBreakDuration = .01;
    this.longBreakDuration = .5;
    this.currentCycle = 0;
    this.autoUpdate = true;
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
        return ClockHelper.minutesToMilliseconds(this.pomodoroDuration);
      case 1:
      case 3:
      case 5:
        return ClockHelper.minutesToMilliseconds(this.shortBreakDuration);
      case 7:
        return ClockHelper.minutesToMilliseconds(this.longBreakDuration);
      default:
        return 0;
    }
  }

  private clearTimeout() {
    if (this._timeout) {
      clearTimeout(this._timeout as any);
      this._timeout = null;
    }
  }

  private updateClock() {
    const newCurrentTime = ClockHelper.getElapsed(this._startedAt);
    const newDisplay = ClockHelper.toDisplay(newCurrentTime);

    if (this._currentTime !== newCurrentTime) {
      this._currentTime = newCurrentTime;
    }

    if (this._clockDisplay !== newDisplay) {
      this._clockDisplay = newDisplay;
    }
  }

  private checkEndOfCycle() {
    const cycleDuration = this.getCycleDuration(this.currentCycle);
    const elapsed = ClockHelper.getElapsed(this._startedAt);

    if (elapsed > cycleDuration) {
      this.paused = true;
      this.events.dispatchEvent('cycleEnd', this.currentCycle);
    }
  }

  clockTick() {
    this.clearTimeout();

    this.checkEndOfCycle();
    this.updateClock();

    // If the clock is not paused, recursively call in the next second.
    if (!this.paused && this.autoUpdate) {
      const elapsed = ClockHelper.getElapsed(this._startedAt);

      const ms = 1000 - elapsed % 1000;

      this._timeout = setTimeout(() => this.clockTick(), ms);
    }
  }

  start() {
    this.paused = false;
    this._startedAt = new Date();

    // If the clock was previously paused in the same cycle, resume the clock from where was paused.
    if (this._beforePause > 0 && this.currentCycle === this._pauseCycle) {
      this._startedAt.setMilliseconds(this._startedAt.getMilliseconds() - this._beforePause);
    }

    this._beforePause = 0;
    this.clockTick();
  }

  pause() {
    this.paused = true;
    this._beforePause = ClockHelper.getElapsed(this._startedAt);
    this._pauseCycle = this.currentCycle;
    this.clockTick();
  }
}