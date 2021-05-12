import React, { useState, useEffect } from 'react';
import '../assets/css/header.css';
import menuIcon from '../assets/icons/hamburger.png';
import logo from '../assets/logo/HondaLogo.png';
import profileImage from '../assets/image/ProfileTop.png';

function Header(props){
    const showNav= {
      display: props.showTopNavMenu ? 'flex' : 'none'
    }
    const showMenuIcon = {
      display: props.showTopNavMenu ? 'none' : 'grid',
    }
    return (
       <>

         <div id="mobile_nav_container" style={showMenuIcon}>
            <span>
                <img src={menuIcon} alt="Menu Button" className="menu-icon"/>
            </span>
            
            <span>
                <img src={logo} alt="Logo" className="logo"/>
            </span>

            <span>
                <img src={profileImage} alt="Profile Picture" className="profile-image"/>
            </span>
         </div>
         
       </>
    )
}

export default Header;