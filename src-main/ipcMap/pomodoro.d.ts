export interface PomodoroMap {
  increment: () => void;
  onCurrentCycleChanged: (cycle: number) => void;
}