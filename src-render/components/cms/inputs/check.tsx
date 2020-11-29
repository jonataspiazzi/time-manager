import React from 'react';

export interface InputCheckProps {
  label?: string;
  explanation?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export default function InputCheck(props: InputCheckProps) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  }

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" checked={!!props.checked} onChange={onChange} disabled={!!props.disabled} />
      {props.label && <label className="form-check-label bold">
        {props.label}
      </label>}
      {props.explanation && <small className="form-text text-muted mb-3">
        {props.explanation}
      </small>}
    </div>
  );
}