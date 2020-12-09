import { ipcMain } from 'electron';
import { ScreenLockBridge } from '../../../bridge/screenLock';
import { ipcNameFactory } from '../../../helpers/ipcHelper';
import { hideScreenLock } from '.';

const name = ipcNameFactory<ScreenLockBridge>('screenLock');

ipcMain.on(name('unlockScreen'), () => {
  hideScreenLock();
});