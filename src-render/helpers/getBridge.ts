export function bridge<T>() {
  return (window as any).API as T;
}