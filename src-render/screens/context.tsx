import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ContextScreen() {
  const history = useHistory();

  return (
    <div>
      <p>Context Menu</p>
      <button className="btn btn-primary" onClick={() => history.push('main')}>Go Back to Main</button>
    </div>
  )
}