import isDev from 'electron-is-dev';
import base64Url from 'base64url';

if (isDev) {
  const express = require('express');

  const app = express();

  app.get('/file', (req: any, res: any) => {
    const fileName = base64Url.decode(req.query.name);

    return res.sendFile(fileName);
  });

  app.listen(3001, () => {
    console.log('Server listener files on port 3001');
  });
}

export function encodeFilename(file: string) {
  const fileBase64 = base64Url.encode(file);

  if (!isDev) return fileBase64;

  const url = `http://localhost:3001/file?name=${fileBase64}`;

  const urlBase64 = base64Url.encode(url);

  return urlBase64;
}