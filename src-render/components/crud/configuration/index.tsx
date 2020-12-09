import React, { useEffect, useState } from 'react';
import PomodoroGroup from './groups/pomodoro';
import SaveChanges from './utils/saveChanges';
import ContextMenuGroup from './groups/contextMenu';
import DrinkWaterGroup from './groups/drinkWater';
import ActivitiesGroup from './groups/activities';
import { ContextMenuInfo } from '../../../../src-main/bridge/infos/contextMenu';
import { DrinkWaterInfo } from '../../../../src-main/bridge/infos/drinkWater';
import { PomodoroInfo } from '../../../../src-main/bridge/infos/pomodoro';
import { ConfigurationBridge } from '../../../../src-main/bridge/configuration';
import { bridge } from '../../../helpers/getBridge';

type GroupNames = 'contextMenu' | 'pomodoro' | 'drinkWater';

export default function ConfigurationCrud() {
  const [isChanged, setIsChanged] = useState(false);
  const [contextMenuInfoIsChanged, setContextMenuInfoIsChanged] = useState(false);
  const [drinkWaterInfoIsChanged, setDrinkWaterInfoIsChanged] = useState(false);
  const [pomodoroInfoIsChanged, setPomodoroInfoIsChanged] = useState(false);

  const [contextMenuInfo, setContextMenuInfo] = useState<ContextMenuInfo>(null);
  const [drinkWaterInfo, setDrinkWaterInfo] = useState<DrinkWaterInfo>(null);
  const [pomodoroInfo, setPomodoroInfo] = useState<PomodoroInfo>(null);

  useEffect(() => {
    const { contextMenu, drinkWater, pomodoro } = bridge<ConfigurationBridge>().loadInfo();

    setContextMenuInfo(contextMenu);
    setDrinkWaterInfo(drinkWater);
    setPomodoroInfo(pomodoro);
  }, []);

  function saveChanges() {
    if (contextMenuInfoIsChanged) {
      bridge<ConfigurationBridge>().saveContextMenu(contextMenuInfo);
    }

    if (drinkWaterInfoIsChanged) {
      bridge<ConfigurationBridge>().saveDrinkWater(drinkWaterInfo);
    }

    if (pomodoroInfoIsChanged) {
      bridge<ConfigurationBridge>().savePomodoro(pomodoroInfo);
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