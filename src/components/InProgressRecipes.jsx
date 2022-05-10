import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { getLocalStorage } from '../services/localStorage';

export default function InProgressRecipes({ type }) {
  const [favorites, setFavorites] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (getLocalStorage('inProgressRecipes') === null) {
      history.push('/');
    }
    setFavorites(getLocalStorage('inProgressRecipes'));
  }, [history]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const FILLERFOOD = 8;
  const FILLERDRINKS = 3;

  return (
    <div>
      <h1>InProgressRecipes</h1>
      <p data-testid="recipe-photo">photo</p>
      <p data-testid="recipe-title">title</p>
      <p data-testid="share-btn">share-btn</p>
      <p data-testid="favorite-btn">favorite-btn</p>
      <p data-testid="recipe-category">recipe-category</p>
      {Array(type === 'drinks' ? FILLERDRINKS : FILLERFOOD).fill('').map((e, index) => (
        <p key={ index } data-testid={ `${index}-ingredient-step` }>ingredient</p>
      ))}
      <p data-testid="instructions">instructions</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}

InProgressRecipes.propTypes = {
  type: propTypes.string.isRequired,
}.isRequired;
