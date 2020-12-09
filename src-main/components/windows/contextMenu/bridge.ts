import { ipcMain } from 'electron';
import { getContextMenuWindow } from '.';
import { ContextMenuBridge } from '../../../bridge/contextMenu';
import { pomodoro } from '../../../business/pomodoro';
import { ipcNameFactory } from '../../../helpers/ipcHelper';

const name = ipcNameFactory<ContextMenuBridge>('contextMenu');

ipcMain.on(name('getPomodoro'), event => {
  return event.returnValue = pomodoro.getInfo();
});

pomodoro.addEventListener('tick', () => {
  getContextMenuWindow()?.webContents.send(name('onPomodoroChanged'), pomodoro.getInfo());
});

ipcMain.on(name('startPomodoro'), (_, cycle) => {
  pomodoro.currentCycle = cycle;
  pomodoro.start();
});

ipcMain.on(name('pausePomodoro'), () => {
  pomodoro.pause();
});

ipcMain.on(name('closeContextMenu'), () => {
  getContextMenuWindow()?.close();
});