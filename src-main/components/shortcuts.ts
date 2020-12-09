import { globalShortcut } from 'electron';
import { showContextMenu } from './windows/contextMenu';

export function configureShortcuts() {
  globalShortcut.unregisterAll();
  globalShortcut.register('CommandOrControl+Shift+1', () => {
    showContextMenu();
  });
}
