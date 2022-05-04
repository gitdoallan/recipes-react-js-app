import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Card(
  { testIdRecipeCard, testIdcardImg, alt, src, testIdTitle, title, type, id },
) {
  return (
    <li data-testid={ testIdRecipeCard }>
      <Link to={ `/${type}/${id}` }>
        <img
          data-testid={ testIdcardImg }
          alt={ alt }
          src={ src }
        />
        <span data-testid={ testIdTitle }>
          { title }
        </span>
      </Link>
    </li>
  );
}

Card.propTypes = {
  testIdRecipeCard: propTypes.string,
  testIdcardImg: propTypes.string,
  alt: propTypes.string,
  src: propTypes.string,
  testIdTitle: propTypes.string,
  title: propTypes.string,
  type: propTypes.string,
  id: propTypes.string,
}.isRequired;
