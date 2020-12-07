import { app } from 'electron';
import { setupPomodoroIpc } from './ipc/pomodoro';
import { showConfigurationWindow } from './components/windows/configuration';
import { showTray } from './components/tray';
import { configureShortcuts } from './components/shortcuts';
import { setupGlobalIpc } from './ipc/global';

app.on('ready', () => {
  setupPomodoroIpc();
  setupGlobalIpc();

  showConfigurationWindow();
  showTray();
  configureShortcuts();
});

app.on('window-all-closed', () => {
});
