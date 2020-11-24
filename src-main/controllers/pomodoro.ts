import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import { PomodoroBusiness } from '../business/pomodoro';
import { windowUrl } from '../helpers/windowUrl';
import { IpcHelper } from '../helpers/ipc';
import { PomodoroMap } from '../ipcMap/pomodoro';

const pomodoro = new PomodoroBusiness();
const ipcHelper = new IpcHelper<PomodoroMap>('pomodoro');
let window: BrowserWindow | null = null;

export function createWindow() {
  window = new BrowserWindow({
    x: isDev ? 2000 : undefined,
    y: isDev ? 20 : undefined,
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

  window.loadURL(windowUrl('main'));

  if (!isDev) {
    window.setMenu(null);
  }
  else {
    window.maximize();
    window.webContents.openDevTools();
  }
}

ipcHelper.addEventListener('increment', () => {
  pomodoro.currentCycle++;

});

pomodoro.addEventListener('currentCycleChanged', cycle => {
  ipcHelper.dispatchEvent(window, 'onCurrentCycleChanged', cycle);
});