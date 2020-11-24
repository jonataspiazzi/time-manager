import React, { useContext, useEffect } from 'react';
import { Observer } from 'mobx-react';
import CircularMenu from './circularMenu';

export default function ContextMenu() {
  return (
    <Observer>
      {() => (
        <div>
          <CircularMenu
            pomodoroCurrentTime={0}
            pomodoroCurrentCycle={0}
            pomodoroCurrentCycleDuration={10}
          />
          <p>Clock: {0}</p>
          <button onClick={() => { }}>start</button>
          <button onClick={() => { }}>pause</button>
        </div>
      )}
    </Observer>
  );
}

