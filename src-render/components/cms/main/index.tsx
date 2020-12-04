import React, { useState } from 'react';
import PomodoroGroup from './groups/pomodoro';
import { IpcHelper } from '../../../helpers/ipc';
import { PomodoroActionMap } from '../../../../src-main/ipcTypes/pomodoro';
import SaveChanges from './utils/saveChanges';
import ContextMenuGroup from './groups/contextMenu';
import DrinkWaterGroup from './groups/drinkWater';
import ActivitiesGroup from './groups/activities';

const ipcHelper = new IpcHelper<PomodoroActionMap>('pomodoro');
type GroupNames = 'contextMenu' | 'pomodoro' | 'drinkWater';

export default function CmsIndex() {
  const [isChanged, setIsChanged] = useState(false);
  const [contextMenuInfo, setContextMenuInfo] = useState<any>({});
  const [pomodoroInfo, setPomodoroInfo] = useState(ipcHelper.dispatchSyncEvent('getInfo'));
  const [drinkWaterInfo, setDrinkWaterInfo] = useState<any>({});

  function saveChanges() {

  }

  function updateInfo(name: GroupNames, info: any) {
    setIsChanged(true);

    switch (name) {
      case 'contextMenu':
        setContextMenuInfo(info);
        break;
      case 'pomodoro':
        setPomodoroInfo(info);
        break;
      case 'drinkWater':
        setDrinkWaterInfo(info);
        break;
    }
  }

  return (
    <main className="col-8 col-sm-9 ml-auto col-lg-10 px-md-4">
      <SaveChanges isChanged={isChanged} onSave={saveChanges} />
      <ContextMenuGroup info={contextMenuInfo} onChange={info => updateInfo('contextMenu', info)} />
      <PomodoroGroup info={pomodoroInfo} onChange={info => updateInfo('pomodoro', info)} />
      <DrinkWaterGroup info={drinkWaterInfo} onChange={info => updateInfo('drinkWater', info)} />
      <ActivitiesGroup />
    </main>
  );
}