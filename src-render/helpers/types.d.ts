export interface Dictionary<T> {
  [key: string]: T;
}

export type RestrictedDictionary<K extends string | number, T> = { [key in K]: T; }
