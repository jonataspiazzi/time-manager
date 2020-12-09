import React from 'react';
import FieldSection from '../../global/fieldSection';
import { DrinkWaterInfo } from '../../../../../src-main/bridge/infos/drinkWater';
import InputCheck from '../../inputs/check';
import InputNumber from '../../inputs/number';
import Notification from './notification';

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
        checked={props.info?.enabled}
        onChange={v => onChange('enabled', v)}
        label="Enabled"
        explanation="Determines if the pomodoro clock is running." />
      <InputNumber
        value={props.info?.lapDuration}
        onChange={v => onChange('lapDuration', v)}
        label="Lap duration"
        explanation="The time in minutes of each lap."
        col={12} sm={4} lg={3} append="min" />
      <Notification
        info={props.info?.notification}
        onChange={v => onChange('notification', v)}
        label="Enable notification"
        explanation="Determines if a notification should be used to alert the user when to drink water." />
    </FieldSection>
  );
}