export interface ClockFeature {
  /**
   * Enables or disables this feature.
   */
  enabled: boolean;

  /**
   * The amout of milliseconds passed from start to now.
   */
  readonly currentTime: number;
}