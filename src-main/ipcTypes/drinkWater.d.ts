import { CycleFeatureInfo } from "./basic";

export interface DrinkWaterInfo extends CycleFeatureInfo {
  /**
   * The time in minutes of each lap.
   */
  lapDuration: number;
}

export interface DrinkWaterActionMap {
  // methods
  getInfo(): DrinkWaterInfo;
  toggleEnabled(): void;
  start(): void;
  pause(): void;
  stop(): void;

  // events
  onUpdate(info: DrinkWaterInfo): void;
}