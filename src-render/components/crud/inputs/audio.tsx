import React from 'react';
import { ConfigurationBridge } from '../../../../src-main/bridge/configuration';
import { bridge } from '../../../helpers/getBridge';
import InputFile from './file';

export interface InputAudioProps {
  label?: string;
  explanation?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export default function InputAudio(props: InputAudioProps) {
  function preview() {
    bridge<ConfigurationBridge>().playAudio(props.value);
  }

  const Button = () => {
    return (
      <div className="input-group-append">
        <button className="btn btn-outline-primary" onClick={preview} disabled={!props.value || props.disabled}>Listen</button>
      </div>
    );
  }

  return (<InputFile {...props} buttons={<Button />} accept="audio/*" />);
}