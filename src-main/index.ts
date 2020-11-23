import { app } from 'electron';
import { createWindow } from './controllers/pomodoro';

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});