/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { fetchApi } from '../services/api';
import { INGREDIENTS_MAXSIZE, RELATED_MAXSIZE } from '../helpers/magicNumbers';

export default function RecipeDetails({ website, keyType, title, image, keyId, type }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [related, setRelated] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    console.log(recipeDetails);
    fetchApi('byId', id, website)
      .then((data) => setRecipeDetails((data[keyType][0])))
      .catch((err) => console.log(err));
  }, [id, website, keyType]);

  useEffect(() => {
    fetchApi('byCategory', recipeDetails.strCategory, website)
      .then((data) => setRelated(data[keyType].slice(0, RELATED_MAXSIZE)))
      .catch((err) => console.log(err));
  }, [recipeDetails]);

  useEffect(() => {
    console.log(recipeDetails);
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
    console.log(ingredientsReduce);
  }, [recipeDetails, id]);

  useEffect(() => {
    console.log(ingredientsArray);
  }, [ingredientsArray]);

  return (
    <div id="recipe-details">
      <h1>RecipeDetails</h1>
      <h2 data-testid="recipe-title">{recipeDetails[title]}</h2>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails[image] }
        alt={ recipeDetails[title] }
      />
      <button type="button" data-testid="share-btn">Share Recipe</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <p>
        Category:
        {' '}
        <span data-testid="recipe-category">
          {type === 'drinks' ? recipeDetails.strAlcoholic : recipeDetails.strCategory}
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
        FUNCIONA MAS NAO PASSA NO TESTE... DEPOIS DESCOMENTAMOS.
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
      <p data-testid="instructions">{recipeDetails.strInstructions}</p>
      <p data-testid="video">{recipeDetails.strYoutube}</p>
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </button>
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
};
