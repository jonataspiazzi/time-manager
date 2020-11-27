import { InputTextProps } from './inputText';
import { InputCheckProps } from './inputCheck';

export type Field = (InputTextProps | InputCheckProps) & { group: string, bind: BindObject, bindProp: string, type: 'check' | 'text' };
export type BindObject = 'contextMenu' | 'drinkWater' | 'pomodoro' | 'activities';

export const fields: Field[] = [
  {
    group: 'Context Menu',
    bind: 'contextMenu',
    bindProp: 'enabled',
    type: 'check',
    label: 'Enable context menu',
    explanation: 'If enabled the context menu (radial menu) can be called by using the shortcut at any time, even if the there is no focus on the program.'
  },
  {
    group: 'Context Menu',
    bind: 'contextMenu',
    bindProp: 'shortcut',
    type: 'text',
    label: 'Context menu keyboard shortcut',
    explanation: 'The keyboard shortcut to call the context menu (radial menu).',
    col: 12, sm: 4, lg: 3
  },
  {
    group: 'Context Menu',
    bind: 'contextMenu',
    bindProp: 'size',
    type: 'text',
    label: 'Context menu size',
    explanation: 'The size of the context menu (radial menu). This value is used to width and height.',
    col: 12, sm: 4, lg: 3, append: 'px'
  }
];

export interface FieldGroups {
  [groupName: string]: Field[];
}

const dic = fields.reduce((ac, i) => {
  ac[i.group] = ac[i.group] || [];
  ac[i.group].push(i);
  return ac;
}, {} as FieldGroups);

export const fieldGrouped = Object.getOwnPropertyNames(dic).map(group => ({ group, fields: dic[group] }));