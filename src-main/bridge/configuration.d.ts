import { ContextMenuInfo } from '../info/contextMenu';
import { PomodoroInfo } from '../info/pomodoro';
import { ContextMenu } from './infos/contextMenu';
import { DrinkWaterInfo } from './infos/drinkWater';
import { Pomodoro } from './infos/pomodoro';

export interface ConfigurationInfo {
  contextMenu: ContextMenu;
  drinkWater: DrinkWaterInfo;
  pomodoro: PomodoroInfo;
}

export interface ConfigurationBridge {
  loadInfo(): ConfigurationInfo;
  saveContextMenu(info: ContextMenuInfo): void;
  saveDrinkWater(info: DrinkWaterInfo): void;
  savePomodoro(info: PomodoroInfo): void;
  playAudio(filename: string): void;
  showScreenLock(filename: string): void;
}