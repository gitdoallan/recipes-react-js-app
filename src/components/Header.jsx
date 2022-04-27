import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
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
      <img alt="Search" src={ searchIcon } data-testid="search-top-btn" />
    </div>
  );
}
