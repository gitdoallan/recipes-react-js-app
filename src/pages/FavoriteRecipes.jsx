import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import blackHeart from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import clipBoard from '../services/clipBoard';
import { getLocalStorage, setLocalStorage } from '../services/localStorage';

export default function FavoriteRecipes() {
  if (getLocalStorage('favoriteRecipes') === null) {
    setLocalStorage('favoriteRecipes', []);
  }
  const lSFavoriteRecipes = getLocalStorage('favoriteRecipes');
  const [filterFoodAndDrinks, setFilterFoodAndDrinks] = useState(lSFavoriteRecipes);
  const [copied, setCopied] = useState(false);

  const handleClick = (type, id) => {
    const mealEndpoint = `http://localhost:3000/${type}s/${id}`;
    clipBoard(setCopied, mealEndpoint);
  };
  return (
    <div>
      <Header
        title="Favorite Recipes"
        searchActive={ false }
      />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => { setFilterFoodAndDrinks(lSFavoriteRecipes); } }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => {
            setFilterFoodAndDrinks(lSFavoriteRecipes
              .filter((elem) => elem.type === 'food'));
          } }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => {
            setFilterFoodAndDrinks(lSFavoriteRecipes
              .filter((elem) => elem.type === 'drink'));
          } }
        >
          Drinks
        </button>
        {filterFoodAndDrinks.map((elem, index) => (
          <div key={ elem.id }>
            <Link to={ `/${elem.type}s/${elem.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ elem.image }
                alt={ elem.name }
                style={ { width: '300px' } }
              />
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { elem.type === 'drink' ? elem.alcoholicOrNot : elem.nationality }
              {' - '}
              { elem.category }
            </p>
            <Link to={ `/${elem.type}s/${elem.id}` }>
              <p
                data-testid={ `${index}-horizontal-name` }
              >
                { elem.name }
              </p>
            </Link>
            <button
              src={ shareIcon }
              data-testid={ `${index}-horizontal-share-btn` }
              type="button"
              onClick={ () => { handleClick(elem.type, elem.id); } }
            >
              {!copied ? <img
                alt="shareIcon"
                src={ shareIcon }
              />
                : <span>Link copied!</span>}
            </button>

            <button
              src={ blackHeart }
              data-testid={ `${index}-horizontal-favorite-btn` }
              type="button"
              onClick={ () => {
                const removeFavorite = filterFoodAndDrinks
                  .filter((elem1) => elem.id !== elem1.id);
                setFilterFoodAndDrinks(removeFavorite);
                localStorage
                  .setItem('favoriteRecipes', JSON.stringify(removeFavorite));
              } }
            >
              <img
                src={ blackHeart }
                alt="blackHeart"
              />
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}
