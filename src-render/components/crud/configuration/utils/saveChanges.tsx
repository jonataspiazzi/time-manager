import React from 'react';

export interface SaveChangesProps {
  isChanged?: boolean;
  onSave: () => void;
}

export default function SaveChanges(props: SaveChangesProps) {
  if (!props.isChanged) return null;

  return (
    <div className="sticky-top change-alert">
      <div className="alert alert-primary col-12">
        <div className="row justify-content-between pl-3 pr-3 align-items-center">
          Changes were made <button className="btn btn-sm btn-outline-primary" onClick={props.onSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
