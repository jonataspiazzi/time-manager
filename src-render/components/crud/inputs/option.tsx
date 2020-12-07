import React from 'react';

export interface Option {
  key: string | number;
  value: string;
}

export interface InputOptionProps {
  options: Option[];
  value: string | number;
  label?: string;
  explanation?: string;
  disabled?: boolean;
  onChange: (value: string | number) => void;
}

export default function InputOption(props: InputOptionProps) {
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }

  return (
    <div className="form-group">
      {props.label && <label>
        {props.label}
      </label>}
      <select className="form-control" value={props.value} onChange={onChange} disabled={props.disabled}>
        {props.options.map(o =>
          <option key={o.key} value={o.key}>{o.value}</option>)}
      </select>
      {props.explanation && <small className="form-text text-muted mb-3">
        {props.explanation}
      </small>}
    </div>
  );
}