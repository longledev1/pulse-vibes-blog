import React from 'react';
import { sidebarNav } from '../../constants/nav';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-4">
      <img srcSet="/images/logo.svg" alt="" />
      <ul className="mt-10 flex flex-col gap-y-6">
        {sidebarNav.map((item) => (
          <li key={item.title} className="mb-2">
            <NavLink
              end
              onClick={(isActive) => (isActive ? 'bg-green-100' : '')}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center p-4 rounded-md transition-colors duration-200 
     hover:bg-gray-100 hover:text-primary 
     ${isActive ? 'bg-green-100 text-primary' : 'text-gray-500'}`
              }
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="ml-2 text-gray-500 group-hover:text-primary">
                {item.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
