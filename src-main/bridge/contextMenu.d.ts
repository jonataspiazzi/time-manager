import { PomodoroCycle, PomodoroInfo } from "./infos/pomodoro";

export interface ContextMenuBridge {
  getPomodoro(): PomodoroInfo;
  onPomodoroChanged(callback: (info: PomodoroInfo) => void): void;
  startPomodoro(cycle: PomodoroCycle): void;
  pausePomodoro(): void;
  closeContextMenu(): void;
}