import { BrowserWindow, screen } from 'electron';
import { encodeFilename } from '../../helpers/externalFileManager';
import { windowUrl } from '../../helpers/windowUrl';

const windows: Array<BrowserWindow | null> = [];

function createWindow(x: number, y: number, filename: string) {
  const window = new BrowserWindow({
    frame: false,
    fullscreen: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  window.webContents.addListener('did-finish-load', () => {
    window.setPosition(x, y);
    window.show();
    window.maximize();
    window.moveTop();
    window.focus();
  });

  window.loadURL(windowUrl(`lock?file=${encodeFilename(filename)}`));

  windows.push(window);
  return window;
}

export function showScreenLock(filename: string) {
  for (const display of screen.getAllDisplays()) {
    const { x, y, width, height } = display.bounds;
    createWindow(x + width / 2, y + height / 2, filename);
  }
}

export function hideScreenLock() {
  let window = windows.shift();

  while (window) {
    window.close();
    window.destroy();
    window = windows.shift();
  }
}