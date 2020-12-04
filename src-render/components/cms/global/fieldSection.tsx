import React from 'react';

export interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  sectionName?: string;
}

export default function FieldSection(props: FieldGroupProps) {
  return (
    <section id={props.sectionName} className="field-section">
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">{props.title}</h2>
      </div>
      <div>
        {props.children}
      </div>
    </section>
  );
}