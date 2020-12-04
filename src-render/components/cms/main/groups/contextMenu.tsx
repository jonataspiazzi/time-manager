import React from 'react';
import FieldSection from '../../global/fieldSection';
import { ContextMenuInfo } from '../../../../../src-main/ipcTypes/contextMenu';
import InputCheck from '../../inputs/check';
import InputNumber from '../../inputs/number';
import InputText from '../../inputs/text';

export interface ContextMenuGroupProps {
  info: ContextMenuInfo;
  onChange: (info: ContextMenuInfo) => void;
}

export default function ContextMenuGroup(props: ContextMenuGroupProps) {
  function onChange<K extends keyof ContextMenuInfo>(field: K, value: ContextMenuInfo[K]) {
    if (!props.onChange) return;

    props.onChange({ ...props.info, [field]: value });
  }

  return (
    <FieldSection title="Context Menu" sectionName="context-menu">
      <InputCheck
        checked={props.info.enabled}
        onChange={v => onChange('enabled', v)}
        label="Enabled"
        explanation="If enabled the context menu (radial menu) can be called by using the shortcut at any time, even if the there is no focus on the program." />
      <InputText
        value={props.info.keyboardShortcut}
        onChange={v => onChange('keyboardShortcut', v)}
        label="Shortcut"
        explanation="The keyboard shortcut to call the context menu (radial menu)."
        col={12} sm={4} lg={3} />
      <InputNumber
        value={props.info.size}
        onChange={v => onChange('size', v)}
        label="Menu size"
        explanation="The size of the context menu (radial menu). This value is used to width and height."
        col={12} sm={4} lg={3} append="px" />
    </FieldSection>
  );
}