import { ContextMenuInfo } from '../bridge/infos/contextMenu';

export default class ContextMenu implements ContextMenuInfo {
  /**
     * If enabled the context menu (radial menu) can be called by using the shortcut at any time, even if the there is no focus on the program.
     */
  enabled?: boolean;

  /**
   * The keyboard shortcut to call the context menu (radial menu).
   */
  keyboardShortcut?: string;

  /**
   * The size of the context menu (radial menu). This value is used to width and height.
   */
  size?: number;

  constructor() {
    this.enabled = true;
    this.keyboardShortcut = 'Ctrl+Shift+1';
    this.size = 512;
  }

  getInfo() {
    return JSON.parse(JSON.stringify(this)) as ContextMenuInfo;
  }

  setInfo(info: ContextMenuInfo) {
    this.enabled = info.enabled;
    this.keyboardShortcut = info.keyboardShortcut;
    this.size = info.size;
  }
}

export const contextMenu = new ContextMenu();