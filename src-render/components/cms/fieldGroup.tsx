import React from 'react';

export interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
}

export default function FieldGroup(props: FieldGroupProps) {
  return (
    <div>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{props.title}</h1>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}