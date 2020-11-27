import React, { useState } from 'react';
import FieldGroup from './fieldGroup';
import InputCheck from './inputCheck';
import InputText from './inputText';
import { BindObject, fieldGrouped } from './fields';

export default function CmsConfiguration() {
  const [isChanged, setIsChanged] = useState(false);
  const [contextMenu, setContextMenu] = useState({
    enabled: true,
    shortcut: 'Ctrl+Shift+1',
    size: 512
  } as { [key: string]: any });

  function getValue(bind: BindObject, bindProp: string): any {
    switch (bind) {
      case 'contextMenu':
        return contextMenu[bindProp];
      default:
        return null;
    }
  }

  function onChange(bind: BindObject, bindProp: string, value: any) {
    setIsChanged(true);

    switch (bind) {
      case 'contextMenu':
        setContextMenu({ ...contextMenu, [bindProp]: value });
        break;
    }
  }

  return (
    <main className="col-8 col-sm-9 ml-auto col-lg-10 px-md-4">
      {isChanged && <div className="sticky-top change-alert">
        <div className="alert alert-primary col-12">
          <div className="row justify-content-between pl-3 pr-3 align-items-center">
            Changes were made <button className="btn btn-sm btn-outline-primary">Save Changes</button>
          </div>
        </div>
      </div>}
      {fieldGrouped.map(g =>
        <FieldGroup key={g.group} title={g.group}>
          {g.fields.map((field, i) => field.type === 'text'
            ? <InputText key={i} {...field as any} onChange={v => onChange(field.bind, field.bindProp, v)} value={getValue(field.bind, field.bindProp)} />
            : <InputCheck key={i} {...field as any} onChange={v => onChange(field.bind, field.bindProp, v)} checked={getValue(field.bind, field.bindProp)} />
          )}
        </FieldGroup>
      )}
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
      <div>app</div>
    </main>
  );
}