import { contextBridge, ipcRenderer } from 'electron';
import { ScreenLockBridge } from '../../../bridge/screenLock';
import { ipcNameFactory } from '../../../helpers/ipcHelper';

const name = ipcNameFactory<ScreenLockBridge>('screenLock');

contextBridge.exposeInMainWorld('API', {
  unlockScreen: () => {
    ipcRenderer.send(name('unlockScreen'));
  }
} as ScreenLockBridge);