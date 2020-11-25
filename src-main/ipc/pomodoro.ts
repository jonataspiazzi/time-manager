import { pomodoro } from '../core/pomodoro';
import { IpcHelper } from '../helpers/ipc';
import { PomodoroActionMap } from '../ipcTypes/pomodoro';
import { getMainWindow } from '../components/main';
import { getContextWindow } from '../components/context';

const ipcHelper = new IpcHelper<PomodoroActionMap>('pomodoro');

export function setupPomodoroIpc() {
  ipcHelper.addEventListener('getInfo', event => {
    event.returnValue = pomodoro.getInfo();
  });

  ipcHelper.addEventListener('toggleEnabled', () => {
    pomodoro.enabled = !pomodoro.enabled;
  });

  ipcHelper.addEventListener('startCycle', (_, cycle) => {
    pomodoro.currentCycle = cycle;
    pomodoro.start();
  });

  ipcHelper.addEventListener('pause', () => {
    pomodoro.pause();
  });

  pomodoro.addEventListener('tick', p => {
    ipcHelper.dispatchEvent(getMainWindow(), 'onUpdate', p.getInfo());
    ipcHelper.dispatchEvent(getContextWindow(), 'onUpdate', p.getInfo());
  });
}
