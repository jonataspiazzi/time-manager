import { globalShortcut } from 'electron';
import { showContextWindow } from './windows/context';

export function configureShortcuts() {
  globalShortcut.unregisterAll();
  globalShortcut.register('CommandOrControl+Shift+1', () => {
    showContextWindow();
  });
}
