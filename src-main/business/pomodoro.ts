import { Notifier } from "../helpers/notifier";

export interface PomodoroBusinessMap {
  currentCycleChanged: (currentCycle: number) => void;
}

export class PomodoroBusiness extends Notifier<PomodoroBusinessMap> {
  private _currentCycle: number;

  set currentCycle(value: number) {
    this._currentCycle = value;
    this.dispatchEvent('currentCycleChanged', this._currentCycle);
  }

  get currentCycle() { return this._currentCycle; }

  constructor() {
    super();
    this._currentCycle = 0;
  }
}