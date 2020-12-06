import { IpcHelper } from '../helpers/ipc';
import { getContextWindow } from '../components/windows/context';
import { GlobalActionMap } from '../ipcTypes/global';
import { showScreenLock, hideScreenLock } from '../components/windows/screenLock';
import { play, stopPlaying } from '../components/windows/audioPlayer';

const ipcHelper = new IpcHelper<GlobalActionMap>('global');

export function setupGlobalIpc() {
  ipcHelper.addEventListener('closeContext', () => {
    getContextWindow()?.close();
  });

  ipcHelper.addEventListener('lockScreen', (_, filename: string) => {
    showScreenLock(filename);
  });

  ipcHelper.addEventListener('unlockScreen', () => {
    hideScreenLock();
  });

  ipcHelper.addEventListener('play', (_, filename: string) => {
    play(filename);
  });

  ipcHelper.addEventListener('stopPlaying', () => {
    stopPlaying();
  });
}
