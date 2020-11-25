import { IpcHelper } from '../helpers/ipc';
import { getContextWindow } from '../components/context';
import { GlobalActionMap } from '../ipcTypes/global';

const ipcHelper = new IpcHelper<GlobalActionMap>('global');

export function setupGlobalIpc() {
  ipcHelper.addEventListener('closeContext', () => {
    getContextWindow()?.close();
  });
}
