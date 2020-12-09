import { ipcMain } from 'electron';
import { ConfigurationBridge, ConfigurationInfo } from '../../../bridge/configuration';
import { contextMenu } from '../../../business/contextMenu';
import { drinkWater } from '../../../business/drinkWater';
import { pomodoro } from '../../../business/pomodoro';
import { ipcNameFactory } from '../../../helpers/ipcHelper';
import { playAudio } from '../audioPlayer';
import { showScreenLock } from '../screenLock';

const name = ipcNameFactory<ConfigurationBridge>('configuration');

ipcMain.on(name('loadInfo'), event => {
  return event.returnValue = {
    contextMenu: contextMenu.getInfo(),
    drinkWater: drinkWater.getInfo(),
    pomodoro: pomodoro.getInfo()
  } as ConfigurationInfo;
});

ipcMain.on(name('saveContextMenu'), (event, info) => {
  contextMenu.setInfo(info);
});

ipcMain.on(name('saveDrinkWater'), (_, info) => {
  drinkWater.setInfo(info);
});

ipcMain.on(name('savePomodoro'), (_, info) => {
  pomodoro.setInfo(info);
});

ipcMain.on(name('playAudio'), (_, filename) => {
  playAudio(filename);
});

ipcMain.on(name('showScreenLock'), (_, filename) => {
  showScreenLock(filename);
});
