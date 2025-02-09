import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBarMenus = ({ menuName, menuIcon, isCollapsed, subMenus = [], isOpen, onToggle, path }) => {
    const location = useLocation();
    const isActive = location.pathname === path || subMenus.some(subMenu => location.pathname === subMenu.path);

    return (
        <>
            <Link to={path}>
                <menu
                    className={`relative group rounded-lg p-2 py-3 flex justify-between items-center 
                        ${isCollapsed ? "w-fit" : "w-full"} cursor-pointer duration-300 
                        ${isActive ? "bg-[#7EBC5D] text-white" : "bg-gray-300 hover:bg-[#7EBC5D] hover:text-white"}`
                    }
                    onClick={onToggle}
                >
                    <span className="w-[20%] px-2">{menuIcon}</span>
                    {!isCollapsed && <span className="w-[80%] text-[20px] font-[500]">{menuName}</span>}

                    {isCollapsed && (
                        <div
                            className="absolute left-full ml-5 px-[10px] py-[6px] text-lg font-medium text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg"
                            role="tooltip"
                        >
                            {menuName}
                        </div>
                    )}
                </menu>
            </Link>

            {!isCollapsed && isOpen && subMenus.length > 0 && (
                <ul className="pl-8 mt-1 flex flex-col gap-2">
                    {subMenus.map((subMenu, index) => (
                        <li key={index} className={` ${location.pathname === subMenu.path ? "underline" : "no-underline"} text-black text-[18px] cursor-pointer hover:text-gray-700`}>
                            <Link to={subMenu.path} className="block">{subMenu.subMenuName}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default SideBarMenus;
