import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PomodoroInfo, PomodoroActionMap } from '../../src-main/ipcMaps/pomodoro';
import CircularMenu from '../components/circularMenu';
import { CircularMenuSvgElementName } from '../helpers/circularMenuSvgHelper';
import { IpcHelper } from '../helpers/ipc';

const pomodoro = new IpcHelper<PomodoroActionMap>('pomodoro');

export default function ContextScreen() {
  const history = useHistory();
  const [pomodoroInfo, setPomodoroInfo] = useState<PomodoroInfo>({} as any);

  useEffect(() => {
    const info = pomodoro.dispatchSyncEvent('getInfo');

    const onUpdate = (info: PomodoroInfo) => setPomodoroInfo(info);
    onUpdate(info);
    pomodoro.addEventListener('onUpdate', onUpdate);

    return () => {
      pomodoro.removeEventListener('onUpdate', onUpdate);
    };
  }, []);

  function elementOnClick(button: CircularMenuSvgElementName) {
    switch (button) {
      case 'pomodoro-pause':
        pomodoro.dispatchEvent('pause');
        break;
      case 'pomodoro-p1':
        pomodoro.dispatchEvent('startCycle', 0);
        break;
      case 'pomodoro-p2':
        pomodoro.dispatchEvent('startCycle', 2);
        break;
      case 'pomodoro-p3':
        pomodoro.dispatchEvent('startCycle', 4);
        break;
      case 'pomodoro-p4':
        pomodoro.dispatchEvent('startCycle', 6);
        break;
      case 'pomodoro-b4':
        pomodoro.dispatchEvent('startCycle', 7);
        break;
    }
  }

  return (
    <div>
      <CircularMenu pomodoro={pomodoroInfo} onClick={elementOnClick} />

      <button className="btn btn-primary" onClick={() => history.push('main')}>Go Back to Main</button>
    </div>
  )
}