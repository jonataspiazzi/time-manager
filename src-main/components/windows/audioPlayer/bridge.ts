import { ipcMain } from 'electron';
import { AudioPlayerBridge } from '../../../bridge/audioPlayer';
import { stopAudio } from '.';
import { ipcNameFactory } from '../../../helpers/ipcHelper';

const name = ipcNameFactory<AudioPlayerBridge>('audioPlayer');

ipcMain.on(name('closePlayer'), () => {
  stopAudio();
});