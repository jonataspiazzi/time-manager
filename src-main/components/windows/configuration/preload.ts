import { contextBridge, ipcRenderer } from 'electron';
import { ConfigurationBridge } from '../../../bridge/configuration';
import { ContextMenuInfo } from '../../../bridge/infos/contextMenu';
import { ipcNameFactory } from '../../../helpers/ipcHelper';

const name = ipcNameFactory<ConfigurationBridge>('configuration');

contextBridge.exposeInMainWorld('API', {
  loadInfo: () => {
    return ipcRenderer.sendSync(name('loadInfo'));
  },
  saveContextMenu: (info: ContextMenuInfo) => {
    ipcRenderer.send(name('saveContextMenu'), info);
  },
  saveDrinkWater: (info: ContextMenuInfo) => {
    ipcRenderer.send(name('saveDrinkWater'), info);
  },
  savePomodoro: (info: ContextMenuInfo) => {
    ipcRenderer.send(name('savePomodoro'), info);
  },
  playAudio: (filename: string) => {
    ipcRenderer.send(name('playAudio'), filename);
  },
  showScreenLock: (filename: string) => {
    ipcRenderer.send(name('showScreenLock'), filename);
  }
} as ConfigurationBridge);