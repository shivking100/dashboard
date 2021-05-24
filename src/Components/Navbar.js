import React , { useState } from 'react'
import '../css/Navbar.css';
import * as HeroIcons from "react-icons/hi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';



function Navbar() {

const [sidebar , setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

    return (
      <>
      <IconContext.Provider value={{color:'#ffffff'}}>
        <div className = "navbar">
            <Link to = "#" className = "menu-bars">                
                <HeroIcons.HiOutlineMenuAlt2  onClick={showSidebar}/>
            </Link>
        </div>
        <nav className = { sidebar ? 'nav-menu active' : 'nav-menu' }>
            <ul className = "nav-menu-items" onClick={showSidebar}>
                <li className = "navbar-toogle">
                    <Link to = "#" className = "menu-bars">
                        <HeroIcons.HiX />
                    </Link>
                </li>
                {SidebarData.map((item , index) =>{
                    return(
                        <li key = {index} className = {item.cName}>
                            <Link to ={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
      </>
    )
}

export default Navbar

