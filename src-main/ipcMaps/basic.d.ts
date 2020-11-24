export interface CycleFeatureInfo {
  /**
   * Enables or disables this feature.
   */
  readonly enabled: boolean;

  /**
   * Defines if an audio should play at the end of a cycle
   */
  audioEnabled: boolean;

  /**
   * Audio file to play at the end of a cycle.
   */
  audioFilename: string;

  /**
   * Defines if an should lock all screens (with an image) at the end of a cycle.
   */
  screenLockEnabled: boolean;

  /**
   * An image to be display on screen lock.
   */
  screenLockFilename: string;

  /**
   * The amout of milliseconds passed from start to now.
   */
  readonly currentTime: number;
}