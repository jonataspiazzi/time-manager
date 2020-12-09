export type AudioTrigger = 'begin' | 'end';

export interface NotificationInfo {
  /**
   * Enables a notification
   */
  enabled: boolean;

  /**
   * Play a sound or music to notify this event.
   */
  playAudio: boolean;

  /**
   * The audio file to be played.
   */
  audioFilename: string;

  /**
   * Determines where the audio should be played.  
   * `begin`: Play at the begin of the cycle.  
   * `end`: Play at the end of the cycle.
   */
  audioTrigger: AudioTrigger;

  /**
   * Use a screen lock as a notification.
   */
  useScreenLock: boolean;

  /**
   * The image file to be used as a screen lock.
   */
  screenLockFilename: string;

  /**
   * Determines if the next cicle should start imediatly after the end of the current cycle or should wait the screen lock to be closed.
   */
  waitScreenLockClosed: boolean;
}