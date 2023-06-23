import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { X, List } from 'react-bootstrap-icons';
import { toggleLoader } from '../../Loader/Loader';

import './navStyle.css'

const Navbar = ({ icon, title }) => {

    const [click, setClick] = useState(false);

    const toggleMobileNav = () => {
        // reverse click effect
        setClick(!click);

        const navList = document.querySelector('.nav-list');
        navList.classList.toggle('navbar-collapse');
        navList.classList.toggle('show');
    }

    // Create state to remove mobile nav toggle

    return (
        <nav className="navbar translucent">
            <h1 className='logo'>
                <Link to='/'>
                    <i className={icon} />
                    {title}
                </Link>
            </h1>

            <ul className='nav-list'>
                <li onClick={toggleLoader}>
                    <Link onClick={toggleMobileNav} to='/'>
                        Home
                    </Link>
                </li>

                <li onClick={toggleLoader}>
                    <Link onClick={toggleMobileNav} to='/about'>
                        About
                    </Link>
                </li>

                <li onClick={toggleLoader}>
                    <Link onClick={toggleMobileNav} to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>

            <button id='nav-toggle' onClick={toggleMobileNav}>
                {
                    click ? <X size={30} /> : <List size={30} />
                }
            </button>
        </nav>

    )
}

Navbar.defaultProps = {
    title: ' Github Finder',
    icon: 'bi-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;