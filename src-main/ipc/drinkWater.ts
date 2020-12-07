import { IpcHelper } from '../helpers/ipc';
import { DrinkWaterActionMap } from '../ipcTypes/drinkWater';
import { drinkWater } from '../business/drinkWater';
import { getContextWindow } from '../components/windows/context';

const helper = new IpcHelper<DrinkWaterActionMap>('drink-water');

helper.addEventListener('getInfo', (event) => {
  return event.returnValue = drinkWater.getInfo();
});

helper.addEventListener('setInfo', (_, info) => {
  drinkWater.setInfo(info);
});

helper.addEventListener('start', () => {
  drinkWater.start();
});

helper.addEventListener('pause', () => {
  drinkWater.pause();
});

drinkWater.addEventListener('tick', () => {
  helper.dispatchEvent(getContextWindow(), 'onChange', drinkWater.getInfo());
})