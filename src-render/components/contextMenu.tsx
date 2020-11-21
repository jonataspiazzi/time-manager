import React, { useContext, useEffect } from 'react';
import { Observer } from 'mobx-react';
import { PomodoroContext } from '../providers/pomodoroProvider';
import CircularMenu from './circularMenu';

export default function ContextMenu() {
  const pomodoro = useContext(PomodoroContext);

  useEffect(() => {
    pomodoro.events.addEventListener('cycleEnd', () => {
      console.log('cycle ended');
    });
  }, [pomodoro.events]);

  return (
    <Observer>
      {() => (
        <div>
          <CircularMenu
            pomodoroCurrentTime={pomodoro.currentTime}
            pomodoroCurrentCycle={pomodoro.currentCycle}
            pomodoroCurrentCycleDuration={pomodoro.currentCycleDuration}
          />
          <p>Clock: {pomodoro.clock}</p>
          <button onClick={() => { pomodoro.currentCycle++; pomodoro.start(); }}>start</button>
          <button onClick={() => pomodoro.pause()}>pause</button>
        </div>
      )}
    </Observer>
  );
}

