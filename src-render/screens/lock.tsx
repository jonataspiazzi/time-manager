import React, { useEffect, useState } from 'react';
import { useHistorySearchObject } from '../helpers/history';
import FullscreenWallpaper from '../components/fullscreenWallpaper';
import base64Url from 'base64url';
import { IpcHelper } from '../helpers/ipc';
import { GlobalActionMap } from '../../src-main/ipcTypes/global';

const helper = new IpcHelper<GlobalActionMap>('global');

export interface LockScreenQuery {
  file: string;
}

export default function LockScreen() {
  const query = useHistorySearchObject<LockScreenQuery>();
  const [filename, setFilename] = useState('');

  useEffect(() => {
    if (!query.file) {
      setFilename(null);
      return;
    }

    const filename = base64Url.decode(query.file);

    setFilename(filename);
  }, [query.file]);

  function unlock() {
    helper.dispatchEvent('unlockScreen');
  }

  return (<FullscreenWallpaper filename={filename} onClick={unlock} />);
}