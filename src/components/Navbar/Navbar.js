import React from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo"><i className="fab fa-react"></i>SIMMI FOUNDATION</h1> 
        <div className="menu-icon">

        </div>
        <ul className='nav-menu'>
            {MenuItems.map((item, index) =>{
                return (

                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a> 
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar
