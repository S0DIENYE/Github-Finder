import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggleLoader } from '../Loader/Loader'

const Navbar = ({ icon, title }) => {

  return (

    <nav className="navbar bg-dark">
      <h1>
        <i className={icon} />
        {title}
      </h1>

      <ul>
        <li onClick={toggleLoader}>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={toggleLoader}>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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