import React, { useEffect, useState } from 'react';
import { IpcHelper } from '../helpers/ipc';
import { PomodoroMap } from '../../src-main/ipcMap/pomodoro';
import { useHistory } from 'react-router-dom';

const ipcHelper = new IpcHelper<PomodoroMap>('pomodoro');

export default function MainScreen() {
  const [cycle, setCycle] = useState(0);
  const history = useHistory();

  useEffect(() => {
    ipcHelper.addEventListener('onCurrentCycleChanged', setCycle);
  }, []);

  function goto() {
    history.push('context');
  }

  function increment() {
    ipcHelper.dispatchEvent('increment');
  }

  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Main Screen</h1>
          <p>
            <button className="btn btn-primary btn-lg" onClick={goto}>Go to Context</button>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Current Cycle: {cycle}</h2>
            <p>
              <button className="btn btn-secondary" onClick={increment}>Increment Cycle</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}