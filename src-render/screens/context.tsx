import React, { useEffect, useState } from 'react';
import CircularMenu from '../components/circularMenu';
import { PomodoroInfo, PomodoroActionMap } from '../../src-main/ipcTypes/pomodoro';
import { GlobalActionMap } from '../../src-main/ipcTypes/global';
import { CircularMenuSvgElementName } from '../helpers/circularMenuSvgHelper';
import { IpcHelper } from '../helpers/ipc';

const pomodoro = new IpcHelper<PomodoroActionMap>('pomodoro');
const globalIpc = new IpcHelper<GlobalActionMap>('global');

export default function ContextScreen() {
  const [pomodoroInfo, setPomodoroInfo] = useState<PomodoroInfo>({} as any);

  useEffect(() => {
    setPomodoroInfo(pomodoro.dispatchSyncEvent('getInfo'));

    const onPomodoroInfoChanged = (info: PomodoroInfo) => setPomodoroInfo(info);

    pomodoro.addEventListener('onChange', onPomodoroInfoChanged);

    return () => {
      pomodoro.removeEventListener('onChange', onPomodoroInfoChanged);
    };
  }, []);

  function elementOnClick(button: CircularMenuSvgElementName) {
    switch (button) {
      case 'pomodoro-pause':
        pomodoro.dispatchEvent('pause');
        break;
      case 'pomodoro-p1':
        pomodoro.dispatchEvent('start', 0);
        break;
      case 'pomodoro-p2':
        pomodoro.dispatchEvent('start', 2);
        break;
      case 'pomodoro-p3':
        pomodoro.dispatchEvent('start', 4);
        break;
      case 'pomodoro-p4':
        pomodoro.dispatchEvent('start', 6);
        break;
      case 'pomodoro-b4':
        pomodoro.dispatchEvent('start', 7);
        break;
    }
  }

  function onClose() {
    globalIpc.dispatchEvent('closeContext');
  }

  return (
    <div>
      <CircularMenu pomodoro={pomodoroInfo} onClick={elementOnClick} onClose={onClose} />
    </div>
  )
}