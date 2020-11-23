import { BrowserWindow } from 'electron';
import { PomodoroBusiness } from '../business/pomodoro';
import { windowUrl } from '../helpers/windowUrl';
import { IpcHelper } from '../helpers/ipc';
import { PomodoroMap } from '../ipcMap/pomodoro';

const pomodoro = new PomodoroBusiness();
const ipcHelper = new IpcHelper<PomodoroMap>('pomodoro');
let window: BrowserWindow | null = null;

export function createWindow() {
  window = new BrowserWindow({
    x: 2000,
    y: 20,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  window.on('close', () => {
    window = null;
  });

  window.loadURL(windowUrl(''));
  window.maximize();
  window.webContents.openDevTools();
}

ipcHelper.addEventListener('increment', () => {
  pomodoro.currentCycle++;

});

pomodoro.addEventListener('currentCycleChanged', cycle => {
  ipcHelper.dispatchEvent(window, 'onCurrentCycleChanged', cycle);
});