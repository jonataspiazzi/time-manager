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
  const [hasDot, setHasDot] = useState(false);
  const [value, setValue] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHasDot(/^\d*\.$/.test(e.target.value));

    const num = Number(e.target.value.replace(/[^\d\.]/g, '').replace(/(?<=\..*)\./g, ''));

    if (props.onChange) props.onChange(num);
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

  useEffect(() => {
    if (!props.value && props.value !== 0) {
      setValue('');
      return;
    }

    setValue(`${props.value}${hasDot ? '.' : ''}`);
  }, [props.value, hasDot]);

  return (
    <div>
      {props.label && <label>
        {props.label}
      </label>}
      <div className="row">
        <div className={colClass}>
          <input className="form-control" type="text" placeholder={props.placeholder} value={value} onChange={onChange} />
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