import isDev from 'electron-is-dev';
import path from 'path';

export function windowUrl(url: string) {
  const subpath = url ? `#/${url.replace(/^\\|\//g, '')}` : '';

  return isDev
    ? `http://localhost:3000${subpath}`
    : `file://${path.resolve(path.join(__dirname, '../../dist-render/index.html'))}${subpath}`;
}