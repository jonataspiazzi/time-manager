import React from 'react';
import InputFile from './file';
import { GlobalActionMap } from '../../../../src-main/ipcTypes/global';
import { IpcHelper } from '../../../helpers/ipc';

const helper = new IpcHelper<GlobalActionMap>('global');

export interface InputAudioProps {
  label?: string;
  explanation?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function InputAudio(props: InputAudioProps) {
  function preview() {
    helper.dispatchEvent('play', props.value);
  }

  const Button = () => {
    return (
      <div className="input-group-append">
        <button className="btn btn-outline-primary" onClick={preview} disabled={!props.value}>Listen</button>
      </div>
    );
  }

  return (<InputFile {...props} buttons={<Button />} accept="audio/*" />);
}