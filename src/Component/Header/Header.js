import React from 'react';
import './Header.css';
import Logo from '../../Image/logo2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container header">
      <nav className="navbar navbar-expand justify-content-between">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <button className="btn btn-block btn-signUp">Sign up</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
