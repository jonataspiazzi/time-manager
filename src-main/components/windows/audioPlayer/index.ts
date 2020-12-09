import path from 'path';
import { BrowserWindow } from 'electron';
import { encodeFilename } from '../../../helpers/externalFileManager';
import { windowUrl } from '../../../helpers/windowUrl';
import './bridge';

let window: BrowserWindow | null;

export function playAudio(filename: string) {
  window = new BrowserWindow({
    width: 600,
    height: 400,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, './preload.js')
    }
  });

  window.webContents.addListener('did-finish-load', () => {

  });

  window.loadURL(windowUrl(`audio-player?file=${encodeFilename(filename)}`));
}

export function stopAudio() {
  window?.close();
  window?.destroy();
  window = null;
}
