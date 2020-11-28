import React from 'react';
import { PomodoroInfo } from '../../../src-main/ipcTypes/pomodoro';
import FieldGroup from './fieldGroup';
import InputCheck from './inputCheck';
import InputFile from './inputFile';
import InputText from './inputText';

export interface PomodoroFormProps {
  info: PomodoroInfo;
  onChange: (info: PomodoroInfo) => void;
}

export default function PomodoroForm(props: PomodoroFormProps) {
  function onChange<K extends keyof PomodoroInfo>(field: K, value: PomodoroInfo[K]) {
    if (!props.onChange) return;

    props.onChange({ ...props.info, [field]: value });
  }

  return (
    <FieldGroup title="Pomodoro">
      <InputCheck
        checked={props.info.enabled}
        onChange={v => onChange('enabled', v)}
        label="Enabled"
        explanation="Determines if the pomodoro clock is running." />
      <InputCheck
        checked={props.info.audioEnabled}
        onChange={v => onChange('audioEnabled', v)}
        label="Audio enabled"
        explanation="Defines if an audio should play at the end of a cycle" />
      <InputFile
        value={props.info.audioFilename}
        onChange={v => onChange('audioFilename', v)}
        label="Audio file"
        explanation="Audio file to play at the end of a cycle." />
      <InputCheck
        checked={props.info.screenLockEnabled}
        onChange={v => onChange('screenLockEnabled', v)}
        label="Screen lock enabled"
        explanation="Defines if an should lock all screens (with an image) at the end of a cycle." />
      <InputFile
        value={props.info.screenLockFilename}
        onChange={v => onChange('screenLockFilename', v)}
        label="Screen lock file"
        explanation="An image to be display on screen lock." />
    </FieldGroup>
  );
}