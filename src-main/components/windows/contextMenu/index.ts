import path from 'path';
import { BrowserWindow, screen } from 'electron';
import { windowUrl } from '../../../helpers/windowUrl';
import './bridge';

let window: BrowserWindow | null = null;

const CONTEXT_WINDOW_SIZE = 512;

export function createWindow() {
  if (window) {
    window.close();
  }

  window = new BrowserWindow({
    width: CONTEXT_WINDOW_SIZE,
    height: CONTEXT_WINDOW_SIZE,
    maxWidth: CONTEXT_WINDOW_SIZE,
    maxHeight: CONTEXT_WINDOW_SIZE,
    resizable: false,
    transparent: true,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, './preload.js')
    }
  });

  window.webContents.addListener('did-finish-load', () => {
    const point = screen.getCursorScreenPoint();

    window?.setPosition(point.x - CONTEXT_WINDOW_SIZE / 2, point.y - CONTEXT_WINDOW_SIZE / 2);
    window?.show();
    window?.moveTop();
    window?.focus();
  })

  window.addListener('closed', () => {
    window?.destroy();
    window = null;
  });

  window.addListener('blur', () => {
    window?.close();
  });

  window.loadURL(windowUrl('context-menu'));

  return window;
}

export function showContextMenu() {
  if (window) {
    window.close();
  }

  createWindow();
}

export function getContextMenuWindow() {
  return window;
}