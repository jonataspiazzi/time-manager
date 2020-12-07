import { IpcMainEvent } from 'electron';
import { CycleFeatureInfo, NotificationInfo } from "./global";

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

  /**
   * Configuration about the notification of end of each pomodoro cycle.
   */
  pomodoroNotification: NotificationInfo;

  /**
   * Configuration about the notification of end of each short break.
   */
  shortBreakNotification: NotificationInfo;

  /**
   * Configuration about the notification of end of each long break.
   */
  longBreakNotification: NotificationInfo;
}

export interface PomodoroActionMap {
  // methods
  getInfo(): PomodoroInfo;
  setInfo(info: PomodoroInfo);
  start(cycle: PomodoroCycle);
  pause();

  // events
  onChange(info: PomodoroInfo): void;
}