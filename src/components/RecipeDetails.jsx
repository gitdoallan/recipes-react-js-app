/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useParams, Link, useHistory } from 'react-router-dom';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { fetchApi } from '../services/api';
import { INGREDIENTS_MAXSIZE, RELATED_MAXSIZE } from '../helpers/magicNumbers';
import { setLocalStorage, getLocalStorage } from '../services/localStorage';

export default function RecipeDetails(
  { website, keyType, title, image, keyId, type, localStorageName, favtype },
) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [related, setRelated] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [onlyIngredients, setOnlyIngredients] = useState([]);
  const [showStartBtn, setShowStartBtn] = useState();
  const [linkCopied, setLinkCopied] = useState(false);
  const [favoriteState, setFavoriteState] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const save = ingredientsArray.map((e) => e.ingredient);
    setOnlyIngredients(save);
    if (getLocalStorage('favoriteRecipes') === null) {
      setLocalStorage('favoriteRecipes', []);
    }
    setFavoriteState(getLocalStorage('favoriteRecipes'));
  }, []);

  useEffect(() => {
    const find = favoriteState.find((e) => e.id === id);
    setFavoriteStatus(find);
  }, [favoriteState, id]);

  useEffect(() => {
    setLocalStorage('favoriteRecipes', favoriteState);
    console.log(getLocalStorage('favoriteRecipes'));
  }, [favoriteState]);

  useEffect(() => {
    if (showStartBtn?.[id] === undefined) {
      setShowStartBtn({ ...showStartBtn, [id]: true });
    }
  }, [id]);

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

  const startRecipe = () => {
    setShowStartBtn({ ...showStartBtn, [id]: false });
    const local = getLocalStorage('inProgressRecipes');
    setLocalStorage('inProgressRecipes',
      { ...local,
        [localStorageName]: {
          ...local?.[localStorageName], [id]: onlyIngredients } });
    history.push(`/${type}/${id}/in-progress`);
  };

  const shareRecipe = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, '1000');
  };

  useEffect(() => {
    fetchApi('byId', id, website)
      .then((data) => setRecipeDetails((data[keyType][0])))
      .catch((err) => console.log(err));
  }, [id, website, keyType]);

  useEffect(() => {
    if (recipeDetails.strCategory) {
      fetchApi('byCategory', recipeDetails.strCategory, website)
        .then((data) => setRelated(data[keyType].slice(0, RELATED_MAXSIZE)))
        .catch((err) => console.log(err));
    }
  }, [recipeDetails]);

  useEffect(() => {
    const ingredientsReduce = Array(INGREDIENTS_MAXSIZE)
      .fill('')
      .reduce(
        (acc, e, index) => [
          ...acc, {
            ingredient: recipeDetails[`strIngredient${index + 1}`],
            measure: recipeDetails[`strMeasure${index + 1}`] }], [],
      )
      .filter(({ ingredient }) => ingredient?.length > 0);
    setIngredientsArray(ingredientsReduce);
  }, [recipeDetails, id]);

  return (
    <div id="recipe-details">
      <h1>RecipeDetails</h1>
      <h2 data-testid="recipe-title">{recipeDetails[title]}</h2>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails[image] }
        alt={ recipeDetails[title] }
      />
      <button
        onClick={ shareRecipe }
        type="button"
        data-testid="share-btn"
      >
        Share Recipe
      </button>
      <button
        className="favoriteBtn"
        type="button"
        data-testid="favorite-btn"
        src={ favoriteStatus ? blackHeartIcon : whiteHeartIcon }
        onClick={ favoriteStatus ? favoriteRemove : favoriteAction }
      >
        <img
          alt="Favorite"
          // src={ favoriteStatus ? blackHeartIcon : whiteHeartIcon }
          // o teste tá pedindo src no button ao invés de na imagem... tirar e botar aqui depois.
        />
      </button>
      {linkCopied && <span>Link copied!</span>}
      <p>
        Category:
        {' '}
        <span data-testid="recipe-category">
          {recipeDetails?.strAlcoholic}
          {' '}
          {recipeDetails?.strCategory}
        </span>
      </p>
      <h3>Recomendações:</h3>

      <div
        data-testid="0-recomendation-card"
        key="recomendation-0"
      >
        <Link to={ `/${type}/${related[0]?.[keyId]}` }>
          <h3>{related[0]?.[title]}</h3>
          <h4>{related[0]?.[keyType]}</h4>
          <img
            src={ related[0]?.[image] }
            alt={ related[0]?.[title] }
          />
        </Link>
      </div>
      <div
        data-testid="1-recomendation-card"
        key="recomendation-1"
      >
        <Link to={ `/${type}/${related[1]?.[keyId]}` }>
          <h3>{related[1]?.[title]}</h3>
          <h4>{related[1]?.[keyType]}</h4>
          <img
            src={ related[1]?.[image] }
            alt={ related[1]?.[title] }
          />
        </Link>
      </div>
      {/* {related.map((recipe, index) => (
        <div
          data-testid={ `${index}-recomendation-card` }
          key={ `recomendation-${index}` }
        >
          <Link to={ `/${type}/${recipe[keyId]}` }>
            <h3>{recipe[title]}</h3>
            <h4>{recipe[keyType]}</h4>
            <img
              src={ recipe[image] }
              alt={ recipe[title] }
            />
          </Link>
        </div>
        // FUNCIONA MAS NAO PASSA NO TESTE... DEPOIS DESCOMENTAMOS.
      ))} */}
      <h4>Ingredients:</h4>
      <ul>
        {ingredientsArray.map((element, index) => (
          <div key={ `{ingredient-${index}}` }>
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ `ingredient-${index}-1` }
            >
              {element.ingredient}
            </li>
            <li
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ `ingredient-${index}-2` }
            >
              {element.measure}
            </li>
          </div>
        ))}
      </ul>
      <p data-testid="instructions">{recipeDetails?.strInstructions}</p>
      <p data-testid="video">{recipeDetails?.strYoutube}</p>

      {showStartBtn?.[id]
        && (
          <button
            className="start-recipe-btn"
            type="button"
            data-testid="start-recipe-btn"
            onClick={ startRecipe }
          >
            {showStartBtn?.[id]
        && !getLocalStorage('inProgressRecipes')?.[localStorageName]?.[id]
              ? 'Start Recipe' : 'Continue Recipe' }
          </button>)}

    </div>
  );
}

RecipeDetails.propTypes = {
  website: propTypes.string.isRequired,
  keyType: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  keyId: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  localStorageName: propTypes.string.isRequired,
  favtype: propTypes.string.isRequired,
};
