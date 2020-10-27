import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../public/website-logo.png';

const Header = () => {
    return (
        <header className='site-header'>
            <span className='logo-container'>
                <NavLink to='/' exact>
                    <img className='website-logo' alt='Syed MH Logo - Neon' src={logo} />
                </NavLink>
            </span>
            <span className='menu'>
                <span className='menu-items-container'>
                    <span className='menu-item'>
                        <NavLink to='/' exact>Home</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='about' exact>About</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='projects' exact>Projects</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='blog' exact>Blog</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='contact' exact>Contact</NavLink>
                    </span>
                </span>
            </span>
        </header>
    )
}

export default Header;