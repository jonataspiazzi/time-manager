import React, { useEffect, useRef } from 'react';
import { BrainIcon, DropIcon, HomeIcon, ListIcon } from './icons';
import SideBarItem from './sideBarItem';

const QUERY_SECTIONS = 'main section';

export default function SideBar() {
  const ulRef = useRef<HTMLUListElement>(null);

  function sideBarItemClick(sectionName: string) {
    const target = document.querySelector(`${QUERY_SECTIONS}#${sectionName}`) as HTMLElement;

    window.scrollTo({ behavior: 'smooth', top: target.offsetTop });
  }

  function onScroll() {
    const sections = document.querySelectorAll(QUERY_SECTIONS) as NodeListOf<HTMLElement>;
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= scrollPos) {
        const id = sections[i].id;

        ulRef.current.querySelector("a.active").classList.remove("active");
        ulRef.current.querySelector(`a[href*=${id}]`).classList.add("active");
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="col-4 col-sm-3 col-lg-2 bg-light sidebar">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column" ref={ulRef}>
          <SideBarItem title="Context Menu" sectionName="context-menu" icon={<HomeIcon size={18} />} active={true} onClick={sideBarItemClick} />
          <SideBarItem title="Pomodoro" sectionName="pomodoro" icon={<BrainIcon size={18} />} active={false} onClick={sideBarItemClick} />
          <SideBarItem title="Drink Water" sectionName="drink-water" icon={<DropIcon size={18} />} active={false} onClick={sideBarItemClick} />
          <SideBarItem title="Activities" sectionName="activities" icon={<ListIcon size={18} />} active={false} onClick={sideBarItemClick} />
        </ul>
      </div>
    </nav>
  );
}

