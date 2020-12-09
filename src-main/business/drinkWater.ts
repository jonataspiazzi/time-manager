import { clockHelper } from '../helpers/clock';
import { Notifier } from '../helpers/notifier';
import { DrinkWaterInfo } from '../bridge/infos/drinkWater';
import { Notification } from './notification';

export interface DrinkWaterMap {
  cycleEnd: () => void;
  tick: () => void;
}

export class DrinkWater extends Notifier<DrinkWaterMap> implements DrinkWaterInfo {
  private _startedAt: Date = new Date(0); // The date where a cycle begun.
  private _beforePause: number = 0; // Amount of miliseconds passed before a pause action.

  /**
   * Enables or disables this feature.
   */
  enabled: boolean;

  /**
   * The time in minutes of each lap.
   */
  lapDuration: number;

  /**
   * Configuration about the notification of end of each cycle.
   */
  notification: Notification;

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
    this.lapDuration = .25;
    this.notification = new Notification('D:\\Downloads\\drinkWater.mp3', 'D:\\Pictures\\Wallpaper\\wp04.jpg');

    clockHelper.addEventListener('tick', this.onTick.bind(this));
  }

  start() {
    this.enabled = true;
    this._startedAt = new Date();

    // If the clock was previously paused in the same cycle, resume the clock from where was paused.
    if (this._beforePause > 0) {
      this._startedAt.setMilliseconds(this._startedAt.getMilliseconds() - this._beforePause);
    }

    this._beforePause = 0;

    if (!clockHelper.enabled) clockHelper.start();
  }

  pause() {
    this.enabled = false;
    this._beforePause = clockHelper.getElapsed(this._startedAt);
  }

  private onTick() {
    if (!this.enabled) return;

    this.dispatchEvent('tick');

    if (this.currentTime > this.lapDuration) {
      this.onCycleEnd();
    }
  }

  private onCycleEnd() {
    this.pause();
    this.dispatchEvent('cycleEnd');
  }

  getInfo() {
    return JSON.parse(JSON.stringify(this)) as DrinkWaterInfo;
  }

  setInfo(info: DrinkWaterInfo) {
    this.lapDuration = info.lapDuration;

    if (info.notification) {
      this.notification.update(info.notification);
    }

    if (info.enabled) {
      this.start();
    }
  }
}

export const drinkWater = new DrinkWater();