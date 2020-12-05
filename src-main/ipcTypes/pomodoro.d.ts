import { CycleFeatureInfo } from "./basic";
import { IpcMainEvent } from 'electron';

export type PomodoroCycle = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface PomodoroInfo extends CycleFeatureInfo {
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
   * Number of the current cycle of pomodoro.
   */
  currentCycle: PomodoroCycle;

  /**
   * The duration in minutes of the current cycle.
   */
  readonly currentCycleDuration: number;
}

export interface PomodoroActionMap {
  // getters
  getInfo(): PomodoroInfo;

  // methods
  toggleEnabled(): void;
  startCycle(cycle: PomodoroCycle);
  pause();

  // events
  onUpdate(info: PomodoroInfo): void;
}