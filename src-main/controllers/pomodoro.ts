import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import { Pomodoro } from '../core/pomodoro';
import { windowUrl } from '../helpers/windowUrl';
import { IpcHelper } from '../helpers/ipc';
import { PomodoroActionMap } from '../ipcMaps/pomodoro';
import { clockHelper } from '../helpers/clock';

const pomodoro = new Pomodoro();
const ipcHelper = new IpcHelper<PomodoroActionMap>('pomodoro');
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

ipcHelper.addEventListener('getInfo', event => {
  event.returnValue = pomodoro.getInfo();
});

ipcHelper.addEventListener('toggleEnabled', () => {
  pomodoro.enabled = !pomodoro.enabled;
});

ipcHelper.addEventListener('startCycle', (_, cycle) => {
  pomodoro.currentCycle = cycle;
  pomodoro.start();
});

ipcHelper.addEventListener('pause', () => {
  pomodoro.pause();
});

clockHelper.addEventListener('tick', () => {
  if (!pomodoro.enabled) return;

  ipcHelper.dispatchEvent(window, 'onUpdate', pomodoro.getInfo());
});