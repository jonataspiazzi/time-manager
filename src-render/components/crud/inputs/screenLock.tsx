import React from 'react';
import { ConfigurationBridge } from '../../../../src-main/bridge/configuration';
import { bridge } from '../../../helpers/getBridge';
import InputFile from './file';

export interface InputScreenLockProps {
  label?: string;
  explanation?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export default function InputScreenLock(props: InputScreenLockProps) {
  function preview() {
    bridge<ConfigurationBridge>().showScreenLock(props.value);
  }

  const Button = () => {
    return (
      <div className="input-group-append">
        <button className="btn btn-outline-primary" onClick={preview} disabled={!props.value || props.disabled}>Preview</button>
      </div>
    );
  }

  return (<InputFile {...props} buttons={<Button />} accept="image/*" />);
}