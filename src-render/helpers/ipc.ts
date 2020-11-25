const { ipcRenderer } = window.require
  ? window.require('electron')
  : { // mock using render in browser.
    ipcRenderer: {
      on: (...args: []) => console.log('ipcRenderer.on called with ', args),
      once: (...args: []) => console.log('ipcRenderer.once called with ', args),
      removeListener: (...args: []) => console.log('ipcRenderer.removeListener called with ', args),
      sendSync: (...args: []) => console.log('ipcRenderer.sendSync called with ', args),
      send: (...args: []) => console.log('ipcRenderer.sendSync called with ', args)
    }
  };


interface ListenerMap {
  original: (...args: []) => any;
  made: (event: any, ...args: []) => any;
}

/**
 * Contains the basic funtionalities of a notifier object.
 */
export class IpcHelper<T extends { [J in Extract<keyof T, string>]: (...args: any) => any }> {
  private globalName: string;
  private readonly _listeners: ListenerMap[] = [];

  constructor(globalName: string) {
    this.globalName = globalName;
  }

  private getFullname(eventName: string) {
    return `${this.globalName}-${eventName}`;
  }

  private makeListener<K extends Extract<keyof T, string>>(listener: T[K], once: boolean) {
    let item = {
      original: listener,
      made: (event: any, ...args: []) => {
        listener(...args);

        if (once) {
          this._listeners.splice(this._listeners.findIndex(p => p.original === listener), 1);
        }
      }
    } as ListenerMap;

    this._listeners.push(item);

    return item.made;
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
    ipcRenderer.on(this.getFullname(eventName), this.makeListener(listener, false));
  }

  /**
   * Adds a one-time `listener` function for the event named `eventName`. The next time `eventName` is
   * triggered, this listener is removed and then invoked.
   * 
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  addEventListenerOnce<K extends Extract<keyof T, string>>(eventName: K, listener: T[K]): void {
    ipcRenderer.once(this.getFullname(eventName), this.makeListener(listener, true));
  }

  /**
   * Removes the specified `listener` from the listener array for the event named `eventName`.
   * 
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  removeEventListener<K extends Extract<keyof T, string>>(eventName: K, listener: T[K]): void {
    const index = this._listeners.findIndex(l => l.original === listener);
    const { made } = this._listeners[index];

    this._listeners.splice(index, 1);

    ipcRenderer.removeListener(this.getFullname(eventName), made);
  };

  /**
   * Synchronously calls each of the listeners registered for the event named eventName, in the order
   * they were registered, passing the supplied arguments to each.
   * 
   * @param eventName The name of the event.
   * @param args The arguments to be pass on the listeners.
   */
  dispatchEvent<K extends Extract<keyof T, string>>(eventName: K, ...args: Parameters<T[K]>): void {
    ipcRenderer.send(this.getFullname(eventName), ...args);
  }

  /**
   * Synchronously calls each of the listeners registered for the event named eventName, in the order
   * they were registered, passing the supplied arguments to each.
   * 
   * @param eventName The name of the event.
   * @param args The arguments to be pass on the listeners.
   */
  dispatchSyncEvent<K extends Extract<keyof T, string>>(eventName: K, ...args: Parameters<T[K]>): ReturnType<T[K]> {
    return ipcRenderer.sendSync(this.getFullname(eventName), ...args);
  }
}