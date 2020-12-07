import React, { useState } from 'react';
import PomodoroGroup from './groups/pomodoro';
import SaveChanges from './utils/saveChanges';
import ContextMenuGroup from './groups/contextMenu';
import DrinkWaterGroup from './groups/drinkWater';
import ActivitiesGroup from './groups/activities';
import { IpcHelper } from '../../../helpers/ipc';
import { PomodoroActionMap } from '../../../../src-main/ipcTypes/pomodoro';
import { DrinkWaterActionMap } from '../../../../src-main/ipcTypes/drinkWater';
import { ContextMenuActionMap } from '../../../../src-main/ipcTypes/contextMenu';

const contextMenu = new IpcHelper<ContextMenuActionMap>('context-menu');
const pomodoro = new IpcHelper<PomodoroActionMap>('pomodoro');
const drinkWater = new IpcHelper<DrinkWaterActionMap>('drink-water');

type GroupNames = 'contextMenu' | 'pomodoro' | 'drinkWater';

export default function ConfigurationCrud() {
  const [isChanged, setIsChanged] = useState(false);
  const [contextMenuInfoIsChanged, setContextMenuInfoIsChanged] = useState(false);
  const [drinkWaterInfoIsChanged, setDrinkWaterInfoIsChanged] = useState(false);
  const [pomodoroInfoIsChanged, setPomodoroInfoIsChanged] = useState(false);

  const [contextMenuInfo, setContextMenuInfo] = useState(contextMenu.dispatchSyncEvent('getInfo'));
  const [drinkWaterInfo, setDrinkWaterInfo] = useState(drinkWater.dispatchSyncEvent('getInfo'));
  const [pomodoroInfo, setPomodoroInfo] = useState(pomodoro.dispatchSyncEvent('getInfo'));

  function saveChanges() {
    if (contextMenuInfoIsChanged) {
      contextMenu.dispatchEvent('setInfo', contextMenuInfo);
    }

    if (drinkWaterInfoIsChanged) {
      drinkWater.dispatchEvent('setInfo', drinkWaterInfo);
    }

    if (pomodoroInfoIsChanged) {
      pomodoro.dispatchEvent('setInfo', pomodoroInfo);
    }

    setContextMenuInfoIsChanged(false);
    setDrinkWaterInfoIsChanged(false);
    setPomodoroInfoIsChanged(false);
    setIsChanged(false);
  }

  function updateInfo(name: GroupNames, info: any) {
    setIsChanged(true);

    switch (name) {
      case 'contextMenu':
        setContextMenuInfo(info);
        setContextMenuInfoIsChanged(true);
        break;
      case 'drinkWater':
        setDrinkWaterInfo(info);
        setDrinkWaterInfoIsChanged(true);
        break;
      case 'pomodoro':
        setPomodoroInfo(info);
        setPomodoroInfoIsChanged(true);
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