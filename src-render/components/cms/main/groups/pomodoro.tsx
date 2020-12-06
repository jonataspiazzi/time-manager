import React from 'react';
import { PomodoroCycle, PomodoroInfo } from '../../../../../src-main/ipcTypes/pomodoro';
import FieldSection from '../../global/fieldSection';
import InputAudio from '../../inputs/audio';
import InputCheck from '../../inputs/check';
import InputNumber from '../../inputs/number';
import InputOption from '../../inputs/option';
import InputScreenLock from '../../inputs/screenLock';

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
        checked={props.info.enabled}
        onChange={v => onChange('enabled', v)}
        label="Enabled"
        explanation="Determines if the pomodoro clock is running." />
      <InputCheck
        checked={props.info.audioEnabled}
        onChange={v => onChange('audioEnabled', v)}
        label="Audio enabled"
        explanation="Defines if an audio should play at the end of a cycle" />
      <InputAudio
        value={props.info.audioFilename}
        onChange={v => onChange('audioFilename', v)}
        label="Audio file"
        explanation="Audio file to play at the end of a cycle." />
      <InputCheck
        checked={props.info.screenLockEnabled}
        onChange={v => onChange('screenLockEnabled', v)}
        label="Screen lock enabled"
        explanation="Defines if an should lock all screens (with an image) at the end of a cycle." />
      <InputScreenLock
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
        value={props.info.pomodoroDuration}
        onChange={v => onChange('pomodoroDuration', v)}
        label="Pomodoro duration"
        explanation="Time in minutes of a dedicated activity."
        col={12} sm={4} lg={3} append="min" />
      <InputNumber
        value={props.info.shortBreakDuration}
        onChange={v => onChange('shortBreakDuration', v)}
        label="Short break duration"
        explanation="Time in minutes of a short break."
        col={12} sm={4} lg={3} append="min" />
      <InputNumber
        value={props.info.longBreakDuration}
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
        value={props.info.currentCycle}
        onChange={v => onChange('currentCycle', v as PomodoroCycle)}
        label="Current Cycle"
        explanation="The current cycle of pomodoro." />
    </FieldSection>
  );
}