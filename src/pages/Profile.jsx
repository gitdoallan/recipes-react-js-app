import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getLocalStorage } from '../services/localStorage';

export default function Profile() {
  const history = useHistory();
  const stringifyLocalStorage = JSON.stringify(getLocalStorage('user'));
  const logoutBtn = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    history.push('/');
  };

  return (
    <div>
      <div>
        <span
          data-testid="profile-email"
        >
          { stringifyLocalStorage }
        </span>
        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => { history.push('/done-recipes'); } }
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => { history.push('/favorite-recipes'); } }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ () => logoutBtn() }
        >
          Logout
        </button>
      </div>
      <Header
        title="Profile"
        searchActive={ false }
      />
      <div>Profile</div>
      <Footer />
    </div>
  );
}
