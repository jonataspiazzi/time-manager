import React from 'react';

export interface SideBarItemProps {
  title: string;
  icon: React.ReactNode;
  active: boolean;
  onClick?: () => void;
}

export default function SideBarItem(props: SideBarItemProps) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    if (props.onClick) props.onClick();
  }

  return (
    <li className="nav-item">
      <a className={`nav-link ${props.active ? 'active' : ''}`} href="#" onClick={onClick}>
        {props.icon}
        {props.title}
      </a>
    </li>
  );
}