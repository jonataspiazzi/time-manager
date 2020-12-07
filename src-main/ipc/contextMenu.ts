import { IpcHelper } from '../helpers/ipc';
import { contextMenu } from '../business/contextMenu';
import { ContextMenuActionMap } from '../ipcTypes/contextMenu';

const helper = new IpcHelper<ContextMenuActionMap>('context-menu');

helper.addEventListener('getInfo', (event) => {
  return event.returnValue = contextMenu.getInfo();
});

helper.addEventListener('setInfo', (_, info) => {
  contextMenu.setInfo(info);
});
