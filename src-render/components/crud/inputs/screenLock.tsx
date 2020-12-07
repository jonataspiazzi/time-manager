import React from 'react';
import InputFile from './file';
import { GlobalActionMap } from '../../../../src-main/ipcTypes/global';
import { IpcHelper } from '../../../helpers/ipc';

const helper = new IpcHelper<GlobalActionMap>('global');

export interface InputScreenLockProps {
  label?: string;
  explanation?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export default function InputScreenLock(props: InputScreenLockProps) {
  function preview() {
    helper.dispatchEvent('lockScreen', props.value);
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