import React, { useEffect, useState } from 'react';
import { useHistorySearchObject } from '../helpers/history';
import FullscreenWallpaper from '../components/fullscreenWallpaper';
import base64Url from 'base64url';
import { bridge } from '../helpers/getBridge';
import { ScreenLockBridge } from '../../src-main/bridge/screenLock';

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
    bridge<ScreenLockBridge>().unlockScreen();
  }

  return (<FullscreenWallpaper filename={filename} onClick={unlock} />);
}