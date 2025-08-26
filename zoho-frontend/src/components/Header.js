import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const location = useLocation();

  // Don't render header on login page
  if (location.pathname === "/login") {
    return null;
  }
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
        <img src={logo} alt="Zohologo" />
        </Link>
      </div>
      <p className="header-right">
        Have a Zoho Account?{' '}
        <a href="/signin" className="header-link">
        SIGN IN
        </a>
       </p>
    </header>

  );
}

export default Header;
