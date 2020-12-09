import { contextBridge, ipcRenderer } from 'electron';
import { ContextMenuBridge } from '../../../bridge/contextMenu';
import { ipcNameFactory } from '../../../helpers/ipcHelper';

const name = ipcNameFactory<ContextMenuBridge>('contextMenu');

contextBridge.exposeInMainWorld('API', {
  getPomodoro: () => {
    return ipcRenderer.sendSync(name('getPomodoro'));
  },
  onPomodoroChanged: callback => {
    ipcRenderer.on(name('onPomodoroChanged'), (_, info) => callback(info));
  },
  startPomodoro: cycle => {
    ipcRenderer.send(name('startPomodoro'), cycle);
  },
  pausePomodoro: () => {
    ipcRenderer.send(name('pausePomodoro'));
  },
  closeContextMenu: () => {
    ipcRenderer.send(name('closeContextMenu'));
  }
} as ContextMenuBridge);