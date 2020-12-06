import React, { useEffect, useRef, useState } from 'react';
import base64url from 'base64url';
import { useHistorySearchObject } from '../helpers/history';
import { IpcHelper } from '../helpers/ipc';
import { GlobalActionMap } from '../../src-main/ipcTypes/global';

const helper = new IpcHelper<GlobalActionMap>('global');

export interface AudioPlayerScreenQuery {
  file: string;
}

export default function AudioPlayerScreen() {
  const query = useHistorySearchObject<AudioPlayerScreenQuery>();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [filename, setFilename] = useState('');

  useEffect(() => {
    audioRef.current.addEventListener('canplay', () => {
      audioRef.current.play();
    });

    audioRef.current.addEventListener('ended', () => {
      helper.dispatchEvent('stopPlaying');
    });
  }, []);

  useEffect(() => {
    console.log('audio player ', { file: query.file });

    if (!query.file) {
      setFilename(null);
      return;
    }

    const filename = base64url.decode(query.file);
    setFilename(filename);
  }, [query.file]);

  return (
    <div>
      <audio src={filename} ref={audioRef} controls={true} />
    </div>
  );
}