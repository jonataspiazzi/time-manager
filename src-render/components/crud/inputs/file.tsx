import React, { useEffect, useState } from 'react';

export interface InputFileProps {
  label?: string;
  explanation?: string;
  value?: string;
  buttons?: React.ReactNode;
  accept?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const DEFAULT_PLACEHOLDER = 'Choose file...';

export default function InputFile(props: InputFileProps) {
  const [placeholder, setPlaceholder] = useState<string>();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!props.onChange) return;

    if (!e.target.files.length) {
      props.onChange(null);
      return;
    }

    props.onChange((e.target.files[0] as any).path);
  }

  useEffect(() => {
    if (!props.value) {
      setPlaceholder(DEFAULT_PLACEHOLDER);
      return;
    }

    const match = /(?<=(\\|\/))[^\\\/]+$/g.exec(props.value);

    if (!match) {
      setPlaceholder(DEFAULT_PLACEHOLDER);
      return;
    }

    setPlaceholder(match[0]);
  }, [props.value]);

  return (
    <div>
      {props.label && <label>
        {props.label}
      </label>}
      <div className="input-group">
        <div className="custom-file">
          <input type="file" className="custom-file-input" onChange={onChange} accept={props.accept} disabled={props.disabled} />
          <label className="custom-file-label">{placeholder}</label>
        </div>
        {props.buttons}
      </div>
      {props.explanation && <small className="form-text text-muted mb-3">
        {props.explanation}
      </small>}
    </div>
  )
}