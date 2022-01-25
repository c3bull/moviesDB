import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {Sidebardata} from "./sidebardata";
import {isExpired} from "react-jwt";

function Sidebar() {

    const [sidebar, setSidebar] = useState(false)

    const isExp = isExpired(localStorage.getItem('token'))

    const showSidebar = () => setSidebar(!sidebar)


    return (
        <div>
            <div className="sidebar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} color="#464646"/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose color="#E1E1E1"/>
                        </Link>
                    </li>
                    {!isExp ? Sidebardata.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    }) : Sidebardata.map((item, index) => {
                        if (index < Sidebardata.length - 1) {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>

        </div>
    )
}

export default Sidebar
