import { BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import { windowUrl } from '../../helpers/windowUrl';

let window: BrowserWindow | null = null;

function createWindow() {
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

  window.addListener('closed', () => {
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

  return window;
}

export function showMainWindow() {
  if (!window) {
    window = createWindow();
  }

  window.show();
  window.moveTop();
}

export function getMainWindow() {
  return window;
}