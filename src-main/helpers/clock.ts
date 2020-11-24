import { Notifier } from './notifier';

export interface ClockHelperMap {
  tick: () => void;
}

export class ClockHelper extends Notifier<ClockHelperMap> {
  private _enabled: boolean = false;
  private _timeout: any = null;

  /**
   * Determines if the clock is enabled.
   */
  get enabled() { return this._enabled; }

  private tick() {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }

    if (!this._enabled) return;

    try {
      this.dispatchEvent('tick');
    }
    catch (ex) {
      console.log('Error inside tick function ', ex);
    }

    const ms = 1000 - new Date().getMilliseconds();
    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.tick();
    }, ms);
  }

  start() {
    this._enabled = true;
    this.tick();
  }

  stop() {
    this._enabled = false;
    this.tick();
  }

  /**
   * Convert a integer value of milliseconds to a string representation like: mm:ss
   * @param milliseconds The time in milliseconds
   */
  toDisplay(milliseconds: number) {
    const d = new Date();
    d.setTime(milliseconds);

    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  /**
   * Get the amount of milliseconds elapsed after starting.
   * @param start The start date.
   */
  getElapsed(start: Date) {
    if (!start) return 0;
    const now = new Date();
    return now.getTime() - start.getTime();
  }

  /**
   * Get a value between 0 and 1 representing the relative position of now in relation to start and duration.
   * @param start The start moment.
   * @param duration The duration of the interval.
   */
  getProgress(start: Date, duration: number) {
    const elapsed = this.getElapsed(start);

    let progress = elapsed / duration;

    if (isNaN(progress)) progress = 0;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    return progress;
  }

  /**
   * Convert a value in minutes to milliseconds
   * @param minutes The value in minutes
   */
  minutesToMilliseconds(minutes: number) {
    return minutes * 60 * 1000;
  }
}

export const clockHelper = new ClockHelper();