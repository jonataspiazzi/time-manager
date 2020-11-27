import React from 'react';
import CmsConfiguration from '../components/cms/configuration';
import Header from '../components/global/header';
import SideBar from '../components/sideBar';

export default function MainScreen() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <CmsConfiguration />
        </div>
      </div>
    </div>
  );
}