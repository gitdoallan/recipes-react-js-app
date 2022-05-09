import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecommendationCard(
  { type, keyId, title, image, testIdRecipeCard },
) {
  return (
    <div
      data-testid={ testIdRecipeCard }
    >
      <Link to={ `/${type}/${keyId}` }>
        <h3>{title}</h3>
        <img
          src={ image }
          alt={ title }
        />
      </Link>
    </div>
  );
}

RecommendationCard.propTypes = {
  keyId: propTypes.string,
  title: propTypes.string,
  keyType: propTypes.string,
  image: propTypes.string,
  testIdRecipeCard: propTypes.string,
}.isRequired;
