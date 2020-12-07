import { IpcHelper } from '../helpers/ipc';
import { getContextWindow } from '../components/windows/context';
import { GlobalActionMap } from '../ipcTypes/global';
import { showScreenLock, hideScreenLock } from '../components/windows/screenLock';
import { playAudio, stopAudio } from '../components/windows/audioPlayer';

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
    playAudio(filename);
  });

  ipcHelper.addEventListener('stopPlaying', () => {
    stopAudio();
  });
}
