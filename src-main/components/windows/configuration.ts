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

  console.log(windowUrl('configuration'));
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