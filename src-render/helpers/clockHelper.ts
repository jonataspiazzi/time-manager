export class ClockHelper {
  /**
   * Convert a integer value of milliseconds to a string representation like: mm:ss
   * @param milliseconds The time in milliseconds
   */
  static toDisplay(milliseconds: number) {
    const d = new Date();
    d.setTime(milliseconds);

    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  /**
   * Get the amount of milliseconds elapsed after starting.
   * @param start The start date.
   */
  static getElapsed(start: Date) {
    if (!start) return 0;
    const now = new Date();
    return now.getTime() - start.getTime();
  }

  /**
   * Get a value between 0 and 1 representing the relative position of now in relation to start and duration.
   * @param start The start moment.
   * @param duration The duration of the interval.
   */
  static getProgress(start: Date, duration: number) {
    const elapsed = ClockHelper.getElapsed(start);

    let progress = elapsed / duration;

    if (isNaN(progress)) progress = 0;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    return progress;
  }

  static minutesToMilliseconds(minutes: number) {
    return minutes * 60 * 1000;
  }
}