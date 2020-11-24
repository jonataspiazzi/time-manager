import React, { useEffect, useRef, useState } from 'react';
import { PomodoroCycle } from '../../src-main/ipcMaps/pomodoro';
import { CircularMenuSvgHelper } from '../helpers/circularMenuSvgHelper';
import './circularMenu.scss';

export interface CircularMenuProps {
  pomodoroCurrentCycle: PomodoroCycle;
  pomodoroCurrentTime: number;
  pomodoroCurrentCycleDuration: number;
}

export default function CircularMenu(props: CircularMenuProps) {
  const [menu, setMenu] = useState(`<p>Loading</p>`);
  const [svgHelper] = useState<CircularMenuSvgHelper>(new CircularMenuSvgHelper());
  const refDiv = useRef<HTMLDivElement>(null);

  async function load() {
    const svg = await svgHelper.load();

    setMenu(svg);
    svgHelper.setElement(refDiv.current);

    (window as any).svgHelper = svgHelper;
  }

  useEffect(() => { load(); }, []);

  useEffect(() => {
    svgHelper.setPomodoroProgress(props.pomodoroCurrentCycle, props.pomodoroCurrentTime, props.pomodoroCurrentCycleDuration);
  }, [props.pomodoroCurrentCycle, props.pomodoroCurrentTime, props.pomodoroCurrentCycleDuration, svgHelper]);

  return (
    <div className="circular-menu" dangerouslySetInnerHTML={{ __html: menu }} ref={refDiv}>
    </div>
  );
}
