import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left => img */}

      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search box */}

      {/* 3 Links */}

      {/* Basket Icon with number */}
    </nav>
  );
}

export default Header;
