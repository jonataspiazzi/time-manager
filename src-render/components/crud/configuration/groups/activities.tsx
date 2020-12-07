import React, { useEffect, useState } from 'react';
import FieldSection from '../../global/fieldSection';

export interface ActivitiesGroupProps {
  //info: ContextMenuInfo;
  //onChange: (info: ContextMenuInfo) => void;
}

export default function ActivitiesGroup() {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < 200; i++) {
      arr.push(i);
    }

    setItems(arr);
  }, []);

  // function onChange<K extends keyof ContextMenuInfo>(field: K, value: ContextMenuInfo[K]) {
  //   if (!props.onChange) return;

  //   props.onChange({ ...props.info, [field]: value });
  // }

  return (
    <FieldSection title="Activities" sectionName="activities">
      {items.map(i =>
        <p key={i}>Paragraph</p>)}
    </FieldSection>
  );
}