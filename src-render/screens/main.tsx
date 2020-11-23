import React, { useEffect, useState } from 'react';
import { IpcHelper } from '../helpers/ipc';
import { PomodoroMap } from '../../src-main/ipcMap/pomodoro';

const ipcHelper = new IpcHelper<PomodoroMap>('pomodoro');

export default function MainScreen() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    ipcHelper.addEventListener('onCurrentCycleChanged', setCycle);
  }, []);

  function increment() {
    ipcHelper.dispatchEvent('increment');
  }

  return (
    <div>
      <p>Main Screen</p>
      <a href="/context">Go to Context</a>
      <br />
      <p>Current Cycle: {cycle}</p>
      <button onClick={increment}>Increment Cycle</button>
    </div>
  );
}