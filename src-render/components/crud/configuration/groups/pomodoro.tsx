import React from 'react';
import { PomodoroCycle, PomodoroInfo } from '../../../../../src-main/bridge/infos/pomodoro';
import FieldSection from '../../global/fieldSection';
import InputCheck from '../../inputs/check';
import InputNumber from '../../inputs/number';
import InputOption from '../../inputs/option';
import Notification from './notification';

export interface PomodoroGroupProps {
  info: PomodoroInfo;
  onChange: (info: PomodoroInfo) => void;
}

export default function PomodoroGroup(props: PomodoroGroupProps) {
  function onChange<K extends keyof PomodoroInfo>(field: K, value: PomodoroInfo[K]) {
    if (!props.onChange) return;

    props.onChange({ ...props.info, [field]: value });
  }

  return (
    <FieldSection title="Pomodoro" sectionName="pomodoro">
      <InputCheck
        checked={props.info?.enabled}
        onChange={v => onChange('enabled', v)}
        label="Enabled"
        explanation="Determines if the pomodoro clock is running." />
      <InputNumber
        value={props.info?.pomodoroDuration}
        onChange={v => onChange('pomodoroDuration', v)}
        label="Pomodoro duration"
        explanation="Time in minutes of a dedicated activity."
        col={12} sm={4} lg={3} append="min" />
      <InputNumber
        value={props.info?.shortBreakDuration}
        onChange={v => onChange('shortBreakDuration', v)}
        label="Short break duration"
        explanation="Time in minutes of a short break."
        col={12} sm={4} lg={3} append="min" />
      <InputNumber
        value={props.info?.longBreakDuration}
        onChange={v => onChange('longBreakDuration', v)}
        label="Long break duration"
        explanation="Time in minutes of a long break."
        col={12} sm={4} lg={3} append="min" />
      <InputOption
        options={[
          { key: 0, value: 'P1 - Pomodoro First Cycle' },
          { key: 2, value: 'P2 - Pomodoro Second Cycle' },
          { key: 4, value: 'P3 - Pomodoro Thrird Cycle' },
          { key: 6, value: 'P4 - Pomodoro Forth Cycle' },
          { key: 1, value: 'B1 - First Short Break' },
          { key: 3, value: 'B2 - Second Short Break' },
          { key: 5, value: 'B3 - Third Short Break' },
          { key: 7, value: 'B4 - Long Break' }
        ]}
        value={props.info?.currentCycle}
        onChange={v => onChange('currentCycle', v as PomodoroCycle)}
        label="Current Cycle"
        explanation="The current cycle of pomodoro." />
      <Notification
        info={props.info?.pomodoroNotification}
        onChange={v => onChange('pomodoroNotification', v)}
        label="Enable pomodoro cycle notification"
        explanation="Determines if a notification should be used to alert the user about the begining or ending of a pomodoro cycle." />
      <Notification
        info={props.info?.shortBreakNotification}
        onChange={v => onChange('shortBreakNotification', v)}
        label="Enable short break notification"
        explanation="Determines if a notification should be used to alert the user about the begining or ending of a short break." />
      <Notification
        info={props.info?.longBreakNotification}
        onChange={v => onChange('longBreakNotification', v)}
        label="Enable long break notification"
        explanation="Determines if a notification should be used to alert the user about the begining or ending of a long break." />
    </FieldSection>
  );
}