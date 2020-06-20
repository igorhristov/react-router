import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../logo.svg';

const activeStyleObj = { color: 'red' };

const links = [
    {
        path: '/',
        exact: true,
        label: 'Home',
    },
    {
        path: '/authors',
        label: 'Authors',
    },
    {
        path: '/author',
        label: 'Author',
    },
    {
        path: '/article',
        label: 'Article',
    },
    {
        path: '/todo',
        label: 'Todo',
    },
];

const Header = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
            </header>
            {links.map((link) => (
                <NavLink
                    key={link.path + link.label}
                    className='Nav-link'
                    to={link.path}
                    exact={link.exact}
                    activeStyle={activeStyleObj}
                >
                    {link.label}
                </NavLink>
            ))}
        </div>
    );
};

export default Header;
