import React from 'react';
import "../../assets/css/style.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://i.imgur.com/onU7Aa2.png"
          alt=""
        />
      </Link>
      <div className="header__nav">
        <Link to="/users/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your </span>
            <span className="header__optionLineTwo">Login</span>
          </div>
        </Link>
        <Link to="/users/register" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Register</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
