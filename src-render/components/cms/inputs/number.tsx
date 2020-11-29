import React, { useEffect, useState } from 'react';

export interface InputNumberProps {
  label?: string;
  explanation?: string;
  value?: number;
  placeholder?: string;
  col?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  preppend?: string;
  append?: string;
  onChange?: (value: number) => void;
}

export default function InputNumber(props: InputNumberProps) {
  const [colClass, setColClass] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (props.onChange) {
      props.onChange(Number(e.target.value));
    }
  }

  useEffect(() => {
    const classes = [
      props.preppend || props.append ? 'input-group ' : '',
      props.col ? `col-${props.col} ` : '',
      props.sm ? `col-sm-${props.sm} ` : '',
      props.md ? `col-md-${props.md} ` : '',
      props.lg ? `col-lg-${props.lg} ` : '',
      props.xl ? `col-xl-${props.xl} ` : ''
    ];

    setColClass(classes.reduce((ac, i) => ac + i, ''));
  }, [props.preppend, props.append, props.col, props.sm, props.md, props.lg, props.xl]);

  return (
    <div>
      {props.label && <label>
        {props.label}
      </label>}
      <div className="row">
        <div className={colClass}>
          <input className="form-control" type="text" placeholder={props.placeholder} value={props.value} onChange={onChange} />
          {props.append && <div className="input-group-append">
            <span className="input-group-text">{props.append}</span>
          </div>}
        </div>
      </div>
      {props.explanation && <small className="form-text text-muted mb-3">
        {props.explanation}
      </small>}
    </div>
  )
}