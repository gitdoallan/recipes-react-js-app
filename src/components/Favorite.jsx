import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { setLocalStorage, getLocalStorage } from '../services/localStorage';

export default function Favorite(
  { recipeDetails, favtype, id, type, title, image },
) {
  const [favoriteState, setFavoriteState] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useState();

  useEffect(() => {
    if (getLocalStorage('favoriteRecipes') === null) {
      setLocalStorage('favoriteRecipes', []);
    }
    setFavoriteState(getLocalStorage('favoriteRecipes'));
  }, []);

  useEffect(() => {
    setLocalStorage('favoriteRecipes', favoriteState);
  }, [favoriteState]);

  useEffect(() => {
    const find = favoriteState.find((e) => e.id === id);
    setFavoriteStatus(find);
  }, [favoriteState, id]);

  const favoriteAction = () => {
    const { strArea, strCategory, strAlcoholic } = recipeDetails;
    const alcoholicOrNot = type === 'drinks' ? strAlcoholic : '';
    const nationality = strArea || '';
    const currentFavorite = {
      id,
      type: favtype,
      nationality,
      category: strCategory,
      alcoholicOrNot,
      name: recipeDetails[title],
      image: recipeDetails[image],
    };
    setFavoriteState([...favoriteState, currentFavorite]);
    setFavoriteStatus(true);
  };

  const favoriteRemove = () => {
    const removeFav = favoriteState.filter((e) => e.id !== id);
    setFavoriteState(removeFav);
  };

  return (
    <div>
      <button
        className="favoriteBtn"
        type="button"
        data-testid="favorite-btn"
        src={ favoriteStatus ? blackHeartIcon : whiteHeartIcon }
        onClick={ favoriteStatus ? favoriteRemove : favoriteAction }
      >
        <img
          alt="Favorite"
          src={ favoriteStatus ? blackHeartIcon : whiteHeartIcon }
        />
      </button>
    </div>
  );
}

Favorite.propTypes = {
  recipeDetails: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,
  favtype: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};
