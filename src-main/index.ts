import { app } from 'electron';
import { showConfigurationWindow } from './components/windows/configuration';
import { showTray } from './components/tray';
import { configureShortcuts } from './components/shortcuts';

app.on('ready', () => {
  showConfigurationWindow();
  showTray();
  configureShortcuts();
});

app.on('window-all-closed', () => {
});
