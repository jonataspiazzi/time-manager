import React, { useEffect, useRef, useState } from 'react';
import base64url from 'base64url';
import { useHistorySearchObject } from '../helpers/history';
import { bridge } from '../helpers/getBridge';
import { AudioPlayerBridge } from '../../src-main/bridge/audioPlayer';

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
      bridge<AudioPlayerBridge>().closePlayer();
    });
  }, []);

  useEffect(() => {
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