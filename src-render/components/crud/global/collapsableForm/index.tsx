import React from 'react';
import InputCheck from '../../inputs/check';
import './index.scss';

export interface CollapsableFormProps {
  label: string;
  explanation: string;
  value: boolean;
  children: React.ReactNode;
  withLine?: boolean;
  onChange: (value: boolean) => void;
}

export default function CollapsableForm(props: CollapsableFormProps) {
  return (
    <div className="collapsable-form">
      <InputCheck
        checked={props.value}
        onChange={props.onChange}
        label={props.label}
        explanation={props.explanation} />
      <div className={`options ${props.value ? '' : 'disabled'} ${props.withLine ? 'with-line' : ''}`}>
        {props.children}
      </div>
    </div>
  );
}