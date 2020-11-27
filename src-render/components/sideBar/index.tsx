import React from 'react';
import { BrainIcon, DropIcon, HomeIcon, ListIcon } from '../global/icons';
import SideBarItem from './sideBarItem';

export default function SideBar() {
  return (
    <nav className="col-4 col-sm-3 col-lg-2 bg-light sidebar">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <SideBarItem title="Dashboard" icon={<HomeIcon size={18} />} active={true} />
          <SideBarItem title="Drink Water" icon={<DropIcon size={18} />} active={false} />
          <SideBarItem title="Pomodoro" icon={<BrainIcon size={18} />} active={false} />
          <SideBarItem title="Activities" icon={<ListIcon size={18} />} active={false} />
        </ul>
      </div>
    </nav>
  );
}

