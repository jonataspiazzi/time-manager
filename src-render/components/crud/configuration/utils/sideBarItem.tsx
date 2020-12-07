import React from 'react';

export interface SideBarItemProps {
  title: string;
  icon: React.ReactNode;
  active: boolean;
  sectionName?: string;
  onClick?: (sectionName: string) => void;
}

export default function SideBarItem(props: SideBarItemProps) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    if (props.onClick) props.onClick(props.sectionName);
  }

  return (
    <li className="nav-item">
      <a className={`nav-link ${props.active ? 'active' : ''}`} href={`#${props.sectionName}`} onClick={onClick}>
        {props.icon}
        {props.title}
      </a>
    </li>
  );
}