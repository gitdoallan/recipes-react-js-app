import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchSection from './SearchSection';

export default function Header(props) {
  const { title, searchActive } = props;
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <div className="header">
      <Link to="/profile">
        <img
          alt="Profile"
          data-testid="profile-top-btn"
          src={ profileIcon }
        />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      {searchActive
      && (
        <button type="button" onClick={ toggleSearchInput }>
          <img
            alt="Search"
            src={ searchIcon }
            data-testid="search-top-btn"
          />
        </button>
      )}
      {showSearchInput && <SearchSection />}
    </div>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  searchActive: propTypes.bool.isRequired,
};
