export interface ContextMenuInfo {
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
}

export interface ContextMenuActionMap {
  // methods
  getInfo(): ContextMenuInfo;
  setInfo(info: ContextMenuInfo): void;

  // events
  onChange(info: ContextMenuInfo): void;
}