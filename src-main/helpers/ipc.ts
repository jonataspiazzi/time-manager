import { BrowserWindow, ipcMain } from 'electron';

/**
 * Contains the basic funtionalities of a notifier object.
 */
export class IpcHelper<T extends { [J in Extract<keyof T, string>]: (...args: any) => any }> {
  private globalName: string;

  constructor(globalName: string) {
    this.globalName = globalName;
  }

  private getFullname(eventName: string) {
    return `${this.globalName}-${eventName}`;
  }

  /**
   * Adds the `listener` function to the end of the listeners array for the event named `eventName`.
   * No checks are made to see if the `listener` has already been added. Multiple calls passing the
   * same combination of `eventName` and `listener` will result in the `listener` being added, and
   * called, multiple times.
   * 
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  addEventListener<K extends Extract<keyof T, string>>(eventName: K, listener: T[K]): void {
    ipcMain.on(this.getFullname(eventName), listener);
  }

  /**
   * Adds a one-time `listener` function for the event named `eventName`. The next time `eventName` is
   * triggered, this listener is removed and then invoked.
   * 
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  addEventListenerOnce<K extends Extract<keyof T, string>>(eventName: K, listener: T[K]): void {
    ipcMain.once(this.getFullname(eventName), listener);
  }

  /**
   * Removes the specified `listener` from the listener array for the event named `eventName`.
   * 
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  removeEventListener<K extends Extract<keyof T, string>>(eventName: K, listener: T[K]): void {
    ipcMain.removeListener(this.getFullname(eventName), listener);
  };

  /**
   * Synchronously calls each of the listeners registered for the event named eventName, in the order
   * they were registered, passing the supplied arguments to each.
   * 
   * @param eventName The name of the event.
   * @param args The arguments to be pass on the listeners.
   */
  dispatchEvent<K extends Extract<keyof T, string>>(window: BrowserWindow | null, eventName: K, ...args: Parameters<T[K]>): void {
    if (!window) return;
    window.webContents.send(this.getFullname(eventName), ...args);
  }
}