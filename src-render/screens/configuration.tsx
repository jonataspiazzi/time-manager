import React from 'react';
import ConfigurationCrud from '../components/crud/configuration';
import Header from '../components/crud/configuration/utils/header';
import SideBar from '../components/crud/configuration/utils/sideBar';

export default function ConfigurationScreen() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <ConfigurationCrud />
        </div>
      </div>
    </div>
  );
}