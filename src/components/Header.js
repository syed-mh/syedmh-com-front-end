import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {

    const mobileNavOpener = useRef(null)
    const mobileNavContainer = useRef(null)
    const mobileNavCloser = useRef(null)
    const mobileNavItemContainer = useRef(null)

    const mobileNavOpen = () => {
        if(!mobileNavContainer.current.classList.contains('active')) {
            mobileNavContainer.current.classList.add('active')
            return true
        }
        return false
    }
    const mobileNavClose = () => {
        if(mobileNavContainer.current.classList.contains('active')) {
            mobileNavContainer.current.classList.remove('active')
            return true
        }
        return false
    }
    useEffect(() => {

        const opener = mobileNavOpener.current
        const closer = mobileNavCloser.current
        const container = mobileNavItemContainer.current

        opener.addEventListener('click', mobileNavOpen)
        closer.addEventListener('click', mobileNavClose)
        container.addEventListener('click', mobileNavClose)

        return (() => {
            opener.removeEventListener('click', mobileNavOpen)
            closer.removeEventListener('click', mobileNavClose)
            container.removeEventListener('click', mobileNavClose)
        })

    }, [])

    return (
        <header className='site-header'>
            <span className='logo-container'>
                <NavLink to='/' exact>
                    <Logo />
                </NavLink>
            </span>
            <nav className='menu'>
                <span className='menu-items-container'>
                    <span className='menu-item'>
                        <NavLink exact to='/'>Home</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='/projects'>Projects</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='/blog'>Blog</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='/about'>About</NavLink>
                    </span>
                    <span className='menu-item'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </span>
                </span>
            </nav>
            <span className='mobile-nav'>
                <span className='opener' ref={mobileNavOpener}>
                    <FontAwesomeIcon icon={['fas', 'bars']} />
                </span>
                <nav className='menu' ref={mobileNavContainer}>
                    <span className='closer' ref={mobileNavCloser} >
                        <FontAwesomeIcon icon={['fas', 'times']} />
                    </span>
                    <span className='menu-items-container' ref={mobileNavItemContainer}>
                        <span className='menu-item'>
                            <NavLink exact to='/'>Home</NavLink>
                        </span>
                        <span className='menu-item'>
                            <NavLink to='/projects'>Projects</NavLink>
                        </span>
                        <span className='menu-item'>
                            <NavLink to='/blog'>Blog</NavLink>
                        </span>
                        <span className='menu-item'>
                            <NavLink to='/about'>About</NavLink>
                        </span>
                        <span className='menu-item'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </span>
                    </span>
                </nav>
            </span>
        </header>
    )
}

export default Header;