export type BridgeName = 'audioPlayer' | 'configuration' | 'contextMenu' | 'screenLock';

export function ipcNameFactory<T>(name: BridgeName) {
  return (key: keyof T) => `${name}.${key}`;
}