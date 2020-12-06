export interface GlobalActionMap {
  // methods
  closeContext(): void;
  lockScreen(filename: string): void;
  unlockScreen(): void;
  play(filename: string): void;
  stopPlaying(): void;
}