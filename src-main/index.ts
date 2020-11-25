import { app } from 'electron';
import { setupPomodoroIpc } from './ipc/pomodoro';
import { showMainWindow } from './components/main';
import { showTray } from './components/tray';
import { configureShortcuts } from './components/shortcuts';
import { setupGlobalIpc } from './ipc/global';

app.on('ready', () => {
  setupPomodoroIpc();
  setupGlobalIpc();

  showMainWindow();
  showTray();
  configureShortcuts();
});

app.on('window-all-closed', () => {
});