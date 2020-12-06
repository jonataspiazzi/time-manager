import { BrowserWindow } from 'electron';
import { encodeFilename } from '../../helpers/externalFileManager';
import { windowUrl } from '../../helpers/windowUrl';

let window: BrowserWindow | null;

export function play(filename: string) {
  window = new BrowserWindow({
    width: 600,
    height: 400,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  window.webContents.addListener('did-finish-load', () => {

  });

  window.loadURL(windowUrl(`audioPlayer?file=${encodeFilename(filename)}`));
}

export function stopPlaying() {
  window?.close();
  window?.destroy();
  window = null;
}
