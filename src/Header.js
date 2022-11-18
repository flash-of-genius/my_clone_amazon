import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

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
      <div className="header__search">
        <input type="text" className="header__serachInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}

      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span> Hello Ahmed</span>
            <span>Sign In</span>
          </div>
        </Link>
        {/* 2st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span> Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        {/* 3st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span> Your</span>
            <span>Prime</span>
          </div>
        </Link>
        {/* 4st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span> Hello Ahmed</span>
            <span>Sign In</span>
          </div>
        </Link>
      </div>

      {/* Basket Icon with number */}
    </nav>
  );
}

export default Header;
