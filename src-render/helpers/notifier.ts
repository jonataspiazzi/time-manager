import { EventEmitter } from 'events';

let notifierId = 0;

/**
 * Contains the basic funtionalities of a notifier object.
 */
export class Notifier<T extends { [J in Extract<keyof T, string>]: (...args: any) => any }> {
  private __emitter = new EventEmitter();
  private __notifierId = 0;

  constructor() {
    this.__notifierId = ++notifierId;
  }

  get id() {
    return this.__notifierId;
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
    this.__emitter.addListener(eventName, listener);
  }

  /**
   * Adds a one-time `listener` function for the event named `eventName`. The next time `eventName` is
   * triggered, this listener is removed and then invoked.
   * 
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  addEventListenerOnce<K extends Extract<keyof T, string>>(eventName: K, listener: T[K]): void {
    this.__emitter.once(eventName, listener);
  }

  /**
   * Removes the specified `listener` from the listener array for the event named `eventName`.
   * 
   * @param eventName The name of the event.
   * @param listener The callback function
   */
  removeEventListener<K extends Extract<keyof T, string>>(eventName: K, listener: T[K]): void {
    this.__emitter.removeListener(eventName, listener);
  };

  /**
   * Synchronously calls each of the listeners registered for the event named eventName, in the order
   * they were registered, passing the supplied arguments to each.
   * 
   * @param eventName The name of the event.
   * @param args The arguments to be pass on the listeners.
   */
  dispatchEvent<K extends Extract<keyof T, string>>(eventName: K, ...args: Parameters<T[K]>): void {
    this.__emitter.emit(eventName, ...args);
  }
}