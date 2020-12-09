import { contextBridge, ipcRenderer } from 'electron';
import { AudioPlayerBridge } from '../../../bridge/audioPlayer';
import { ipcNameFactory } from '../../../helpers/ipcHelper';

const name = ipcNameFactory<AudioPlayerBridge>('audioPlayer');

contextBridge.exposeInMainWorld('API', {
  closePlayer: () => {
    ipcRenderer.send(name('closePlayer'));
  }
} as AudioPlayerBridge);