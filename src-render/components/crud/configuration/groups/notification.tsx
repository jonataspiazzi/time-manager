import React from 'react';
import { NotificationInfo } from '../../../../../src-main/bridge/infos/notification';
import CollapsableForm from '../../global/collapsableForm';
import InputAudio from '../../inputs/audio';
import InputCheck from '../../inputs/check';
import InputOption from '../../inputs/option';
import InputScreenLock from '../../inputs/screenLock';

export interface NotificationProps {
  label: string;
  explanation: string;
  info: NotificationInfo;
  onChange: (value: NotificationInfo) => void;
}

export default function Notification(props: NotificationProps) {
  function onChange<K extends keyof NotificationInfo>(field: K, value: NotificationInfo[K]) {
    if (!props.onChange) return;

    props.onChange({ ...props.info, [field]: value });
  }

  return (
    <CollapsableForm
      label={props.label}
      explanation={props.explanation}
      value={props.info?.enabled}
      withLine={true}
      onChange={v => onChange('enabled', v)}
    >
      <CollapsableForm
        value={props.info?.playAudio}
        onChange={v => onChange('playAudio', v)}
        label="Play audio"
        explanation="Play a sound or music to notify this event.">
        <InputAudio
          value={props.info?.audioFilename}
          onChange={v => onChange('audioFilename', v)}
          label="Audio file"
          explanation="The audio file to be played." />
        <InputOption
          value={props.info?.audioTrigger}
          onChange={v => onChange('audioTrigger', v as any)}
          options={[
            { key: 'begin', value: 'Play at the begin of the cycle' },
            { key: 'end', value: 'Play at the end of the cycle.' }
          ]}
          label="Audio trigger"
          explanation="Determines where the audio should be played. " />
      </CollapsableForm>
      <CollapsableForm
        value={props.info?.useScreenLock}
        onChange={v => onChange('useScreenLock', v)}
        label="Use screen lock"
        explanation="Use a screen lock as a notification."
      >
        <InputScreenLock
          value={props.info?.screenLockFilename}
          onChange={v => onChange('screenLockFilename', v)}
          disabled={!props.info?.useScreenLock}
          label="Screen lock file"
          explanation="The image file to be used as a screen lock." />
        <InputCheck
          checked={props.info?.waitScreenLockClosed}
          onChange={v => onChange('waitScreenLockClosed', v)}
          disabled={!props.info?.useScreenLock}
          label="Wait on screen lock closed"
          explanation="Determines if the next cicle should start imediatly after the end of the current cycle or should wait the screen lock to be closed." />
      </CollapsableForm>
    </CollapsableForm>
  );
}