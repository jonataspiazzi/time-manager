import React, { useEffect, useState } from 'react';
import CircularMenu from '../components/circularMenu';
import { PomodoroInfo } from '../../src-main/bridge/infos/pomodoro';
import { CircularMenuSvgElementName } from '../helpers/circularMenuSvgHelper';
import { bridge } from '../helpers/getBridge';
import { ContextMenuBridge } from '../../src-main/bridge/contextMenu';

export default function ContextMenuScreen() {
  const [pomodoroInfo, setPomodoroInfo] = useState<PomodoroInfo>({} as any);

  useEffect(() => {
    const pomodoroInfo = bridge<ContextMenuBridge>().getPomodoro()
    setPomodoroInfo(pomodoroInfo);

    bridge<ContextMenuBridge>().onPomodoroChanged(setPomodoroInfo);
  }, []);

  function elementOnClick(button: CircularMenuSvgElementName) {
    switch (button) {
      case 'pomodoro-pause':
        bridge<ContextMenuBridge>().pausePomodoro();
        break;
      case 'pomodoro-p1':
        bridge<ContextMenuBridge>().startPomodoro(0);
        break;
      case 'pomodoro-p2':
        bridge<ContextMenuBridge>().startPomodoro(2);
        break;
      case 'pomodoro-p3':
        bridge<ContextMenuBridge>().startPomodoro(4);
        break;
      case 'pomodoro-p4':
        bridge<ContextMenuBridge>().startPomodoro(6);
        break;
      case 'pomodoro-b4':
        bridge<ContextMenuBridge>().startPomodoro(7);
        break;
    }
  }

  function onClose() {
    bridge<ContextMenuBridge>().closeContextMenu();
  }

  return (
    <div>
      <CircularMenu pomodoro={pomodoroInfo} onClick={elementOnClick} onClose={onClose} />
    </div>
  )
}