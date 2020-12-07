import { pomodoro } from '../business/pomodoro';
import { IpcHelper } from '../helpers/ipc';
import { PomodoroActionMap } from '../ipcTypes/pomodoro';
import { getContextWindow } from '../components/windows/context';

const ipcHelper = new IpcHelper<PomodoroActionMap>('pomodoro');

export function setupPomodoroIpc() {
  ipcHelper.addEventListener('getInfo', event => {
    return event.returnValue = pomodoro.getInfo();
  });

  ipcHelper.addEventListener('setInfo', (_, info) => {
    pomodoro.setInfo(info);
  });

  ipcHelper.addEventListener('start', (_, cycle) => {
    pomodoro.currentCycle = cycle;
    pomodoro.start();
  });

  ipcHelper.addEventListener('pause', () => {
    pomodoro.pause();
  });

  pomodoro.addEventListener('tick', () => {
    ipcHelper.dispatchEvent(getContextWindow(), 'onChange', pomodoro.getInfo());
  });
}
