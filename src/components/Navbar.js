import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className="nav">
                <li className="nav__item">
                    <NavLink to= "/" className="nav__link">
                        Home
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to= "/add-techno" className="nav__link">
                        Add Techno
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to= "/all-techno" className="nav__link">
                        All Technos
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;