import React from 'react';
import FieldSection from '../../global/fieldSection';
import { DrinkWaterInfo } from '../../../../../src-main/ipcTypes/drinkWater';
import InputCheck from '../../inputs/check';
import InputNumber from '../../inputs/number';
import InputFile from '../../inputs/file';

export interface DrinkWaterGroupProps {
  info: DrinkWaterInfo;
  onChange: (info: DrinkWaterInfo) => void;
}

export default function DrinkWaterGroup(props: DrinkWaterGroupProps) {
  function onChange<K extends keyof DrinkWaterInfo>(field: K, value: DrinkWaterInfo[K]) {
    if (!props.onChange) return;

    props.onChange({ ...props.info, [field]: value });
  }

  return (
    <FieldSection title="Drink Water" sectionName="drink-water">
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
      <InputCheck
        checked={props.info.waitScreenLockClosed}
        onChange={v => onChange('waitScreenLockClosed', v)}
        disabled={!props.info.screenLockEnabled}
        label="Wait screen lock closed"
        explanation="This option is valid only if screen lock is enabled. Determines if at a cycle end will the next cycle begin automatically or it'll wait on screen lock close event." />
      <InputNumber
        value={props.info.lapDuration}
        onChange={v => onChange('lapDuration', v)}
        label="Lap duration"
        explanation="The time in minutes of each lap."
        col={12} sm={4} lg={3} append="min" />
    </FieldSection>
  );
}