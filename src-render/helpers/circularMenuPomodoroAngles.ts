import { PomodoroCycle } from '../../src-main/ipcTypes/pomodoro';

export interface Interval {
  begin: number;
  end: number;
}

export class CircularMenuPomodoroAngles {
  readonly pomodoro1: Interval;
  readonly pomodoro2: Interval;
  readonly pomodoro3: Interval;
  readonly pomodoro4: Interval;
  readonly break1: Interval;
  readonly break2: Interval;
  readonly break3: Interval;
  readonly break4: Interval;
  readonly pomodoros: Interval[];
  readonly breaks: Interval[];
  readonly all: Interval[];

  constructor() {
    this.pomodoro1 = { begin: 0.000, end: 22.02 };
    this.pomodoro2 = { begin: 28.27, end: 45.97 };
    this.pomodoro3 = { begin: 52.27, end: 70.11 };
    this.pomodoro4 = { begin: 76.63, end: 93.96 };
    this.break1 = { begin: 23.57, end: 26.67 };
    this.break2 = { begin: 47.57, end: 50.67 };
    this.break3 = { begin: 71.57, end: 74.67 };
    this.break4 = { begin: 95.57, end: 122.3 };

    this.pomodoros = [this.pomodoro1, this.pomodoro2, this.pomodoro3, this.pomodoro4];
    this.breaks = [this.break1, this.break2, this.break3, this.break4];

    this.all = [
      this.pomodoro1,
      this.break1,
      this.pomodoro2,
      this.break2,
      this.pomodoro3,
      this.break3,
      this.pomodoro4,
      this.break4
    ];
  }

  calculateAngle(cycle: PomodoroCycle, currentTime: number, duration: number) {
    const segment = this.all[cycle];

    return currentTime * (segment.end - segment.begin) / duration + segment.begin;
  }
}