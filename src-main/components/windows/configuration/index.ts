import path from 'path';
import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import { windowUrl } from '../../../helpers/windowUrl';
import './bridge';

let window: BrowserWindow | null = null;

function createWindow() {
  window = new BrowserWindow({
    x: isDev ? 2000 : undefined,
    y: isDev ? 20 : undefined,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, './preload.js')
    }
  });

  window.addListener('closed', () => {
    window = null;
  });

  window.loadURL(windowUrl('configuration'));

  if (!isDev) {
    window.setMenu(null);
  }
  else {
    window.maximize();
    window.webContents.openDevTools();
  }

  return window;
}

export function showConfigurationWindow() {
  if (!window) {
    window = createWindow();
  }

  window.show();
  window.moveTop();
}

export function getConfigurationWindow() {
  return window;
}