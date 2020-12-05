export interface GlobalActionMap {
  // methods
  closeContext(): void;
  lockScreen(filename: string): void;
  unlockScreen(): void;
}