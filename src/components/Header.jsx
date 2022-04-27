import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <div className="header">
      <Link to="/profile">
        <img
          alt="Profile Button"
          data-testid="profile-top-btn"
          src={ profileIcon }
        />
      </Link>
      <h1 data-testid="page-title">Foods</h1>
      <div>
        <button type="button" onClick={ toggleSearchInput }>
          <img
            alt="Search"
            src={ searchIcon }
            data-testid="search-top-btn"
          />
        </button>
        {showSearchInput && (
          <input type="text" placeholder="Search..." data-testid="search-input" />
        )}
      </div>
    </div>
  );
}
