import React from 'react';
import CmsIndex from '../components/cms/main';
import Header from '../components/cms/main/utils/header';
import SideBar from '../components/cms/main/utils/sideBar';

export default function MainScreen() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <CmsIndex />
        </div>
      </div>
    </div>
  );
}