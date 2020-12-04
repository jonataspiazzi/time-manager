import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <p className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 mb-0">Configuration</p>
      <input className="form-control form-control-dark" type="text" placeholder="Search" style={{ display: 'none' }} />
    </nav>
  );
}