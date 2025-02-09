import React, { useContext } from 'react';
import SideBarMenus from './SideBar/SideBarMenus';
import { AppContext } from '../context/AppContext';
import { menus } from '../utils/SidebarUtils';
import { IconsObject } from '../assets/Icons/Icons';
import { useLocation } from 'react-router-dom';

const SideBar = () => {

  const { toggleSidebar, toggle, handleSubmenuToggle, openSubmenu } = useContext(AppContext);

  return (
    <aside className={`h-screen bg-gray-200 p-[15px] duration-300 transition-all ${toggle ? "w-[310px]" : "w-[85px]"}`}>
      <div className="flex justify-center items-center" onClick={toggleSidebar} >
        <span >{IconsObject.burgerMenu(25)}</span>
      </div>

      <div className={` flex justify-center gap-[12px] flex-col mt-10 ${!toggle ? "items-center" : ""} `}>
        {menus.map((menu, index) => {
          return (
            <SideBarMenus
              key={index}
              path={menu.path}
              menuName={menu.menuName}
              menuIcon={menu.menuIcon}
              isCollapsed={!toggle}
              subMenus={menu.subMenus || []}
              onToggle={() => handleSubmenuToggle(menu.menuName)}
              isOpen={openSubmenu === menu.menuName}
            />)
        })}
      </div>
    </aside>
  )
}

export default SideBar
