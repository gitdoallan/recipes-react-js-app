import React from 'react';
import propTypes from 'prop-types';
// import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'use-local-storage-state';
import { getLocalStorage } from '../services/localStorage';
import ShareBtnProgress from './ShareBtnProgress';
import { twoDoneRecipes } from '../services/mockApi';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import { SIZE_IN_PROGRESS } from '../helpers/magicNumbers';

export default function RecipeInProgress({ type }) {
  console.log(getLocalStorage('inProgressRecipes'));
  // const [foods, setFoods] = useState([]);
  // const [inProgressRecipes] = useLocalStorage(
  //   'inProgressRecipes', [twoDoneRecipes],
  // );
  const showFinishBtn = true;

  // useEffect(() => setFoods(inProgressRecipes), [inProgressRecipes]);

  const ingredientsArray = ['Salt', 'Pepper', 'Egs', 'Cheese'];

  // const { food } = foods;
  // id, type, category, alcoholicOrNot, name, image } = food;
  const history = useHistory();
  // const specificRecipeURL = `/${type}s/${id}`;
  const actualUrl = window.location.href.slice(SIZE_IN_PROGRESS);
  const foodType = {
    meals: 'meals',
    drinks: 'cocktails',
  };
  const fT = foodType[type];
  const [
    inProgress, setInProgress,
  ] = useLocalStorage('inProgressRecipes', { [fT]: { [id]: [] } });

  return (
    <main className="recipe-details">
      <h1>Recipe in Progress</h1>
      <p data-testid="recipe-title">type</p>
      <div data-testid="recipe-photo">
        <img
          src={ whiteHeartIcon }
          // src={ recipeDetails[image] }
          // alt={ recipeDetails[name] }
          alt="recipeName"
        />
      </div>

      <ShareBtnProgress { ...{ actualUrl } } />
      <button
        className="favoriteBtn"
        type="button"
        data-testid="favorite-btn"
        // src={ favoriteStatus ? blackHeartIcon : whiteHeartIcon }
        // onClick={ favoriteStatus ? favoriteRemove : favoriteAction }
      >
        <img
          alt="Favorite"
          // src={ favoriteStatus ? blackHeartIcon : whiteHeartIcon }
          // o teste tá pedindo src no button ao invés de na imagem... tirar e botar aqui depois.
        />
      </button>
      <p>
        Category:
        {' '}
        <span data-testid="recipe-category">
          {'alcoholicOrNot'}
          {' '}
          {'category'}
        </span>
      </p>
      <h4>Ingredients:</h4>
      <ul>
        {ingredientsArray.map((element, index) => (
          <div key={ `{${index}-ingredient-step}` }>
            <li
              data-testid="ingredient-step"
              key={ `${index}-ingredient-step` }
            >
              element.ingredient
            </li>
            <li
              data-testid="ingredient-step"
              key={ `${index}-ingredient-step` }
            >
              element.measure
            </li>
          </div>
        ))}
      </ul>

      <p data-testid="instructions">{twoDoneRecipes?.strInstructions}</p>

      {showFinishBtn
        && (
          <Button
            className="finish-recipe-btn"
            type="button"
            data-testid="finish-recipe-btn"
            onClick={ () => { history.push('/done-recipes'); } }
          >
            Finish Recipe
          </Button>) }
    </main>
  );
}

RecipeInProgress.propTypes = {
  type: propTypes.string.isRequired,
};
