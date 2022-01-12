import React from 'react';
import { NavLink } from 'react-router-dom';
import './includes.css';

const activeStyle = {
  color: '#000',
  paddingBottom: '4px',
  borderBottom: '4px solid #a9a9a9',
  transition: 'all 0.2s ease-out',
};

export default function Header() {
  const click = false;
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo'>
            BEEPBOP&nbsp; <i className='fas fa-adjust' />
          </a>
          <div className='menu-icon'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink className='nav-links' to='/'>
                Home{' '}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-links'
                activeStyle={activeStyle}
                to='/projects'
              >
                Projects{' '}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-links'
                activeStyle={activeStyle}
                to='/blog'
              >
                Blog{' '}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-links'
                activeStyle={activeStyle}
                to='/reactions'
              >
                Reactions{' '}
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-links'
                activeStyle={activeStyle}
                to='/github'
              >
                GitHub Repos{' '}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
