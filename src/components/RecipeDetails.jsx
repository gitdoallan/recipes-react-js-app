/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { fetchApi } from '../services/api';
import { INGREDIENTS_MAXSIZE } from '../helpers/magicNumbers';
import { setLocalStorage, getLocalStorage } from '../services/localStorage';
import Favorite from './Favorite';
import Share from './Share';

export default function RecipeDetails(
  { website, keyType, title, image, type, localStorageName, favtype },
) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [onlyIngredients, setOnlyIngredients] = useState([]);
  const [showStartBtn, setShowStartBtn] = useState();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (showStartBtn?.[id] === undefined) {
      setShowStartBtn({ ...showStartBtn, [id]: true });
    }
  }, [id]);

  useEffect(() => {
    const save = ingredientsArray.map((e) => e.ingredient);
    setOnlyIngredients(save);
  }, []);

  const startRecipe = () => {
    setShowStartBtn({ ...showStartBtn, [id]: false });
    const local = getLocalStorage('inProgressRecipes');
    setLocalStorage('inProgressRecipes',
      { ...local,
        [localStorageName]: {
          ...local?.[localStorageName], [id]: onlyIngredients } });
    history.push(`/${type}/${id}/in-progress`);
  };

  useEffect(() => {
    fetchApi('byId', id, website)
      .then((data) => setRecipeDetails((data[keyType][0])))
      .catch((err) => console.log(err));
  }, [id, website, keyType]);

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
      <Share
        copyType="url"
        copyMsg="Link copied!"
        btnText="Share Recipe"
      />
      <Favorite
        favtype={ favtype }
        type={ type }
        title={ title }
        image={ image }
        recipeDetails={ recipeDetails }
        id={ id }
      />

      <p>
        Category:
        {' '}
        <span data-testid="recipe-category">
          {recipeDetails?.strAlcoholic}
          {' '}
          {recipeDetails?.strCategory}
        </span>
      </p>

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
  type: propTypes.string.isRequired,
  localStorageName: propTypes.string.isRequired,
  favtype: propTypes.string.isRequired,
};
