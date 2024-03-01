import React, { useState } from 'react';
import './NavBar.css';
import ham from './ham.png';
import cross from './cross.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <div className={`sidebar ${sidebarOpen ? 'sidebargo' : ''}`}>
        <nav>
          <ul>
            <li><NavLink to="/"> Home </NavLink></li>
            <li><NavLink to="/admin/my-profile"> Profile </NavLink></li>
            {/* <li><NavLink to=""> Update Profile </NavLink></li> */}
            <li><NavLink to="/admin/update-password"> Update Password </NavLink></li>
            <li><NavLink to="/admin/logout"> Logout </NavLink></li>
          
          </ul>
        </nav>
      </div>
      <div className="main">
        <div className={`hamburger ${sidebarOpen ? 'cross' : ''}`} onClick={toggleSidebar}>
          <img className="cross" src={cross} alt="" width="23" style={{ display: sidebarOpen ? 'none' : 'inline' }} />
          <img className="menu" src={ham} alt="" width="23" style={{ display: sidebarOpen ? 'inline' : 'none' }} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;