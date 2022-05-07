import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
import '../styles/DoneRecipes.css';

export default function DoneRecipeCard({ card, cardIndex }) {
  const {
    id, type, nationality, category, alcoholicOrNot, doneDate, name, image, tags,
  } = card;
  console.log('AREA.......: ', nationality);
  const firstTwoTags = Array.from(tags.toString().split(',').slice(0, 2));
  const specificRecipeURL = `/${type}s/${id}`;
  const actualUrl = window.location.href.replace(/\/done-recipes/, specificRecipeURL);
  console.log('TWO TAGS.......: ', tags);
  console.log('Actual Url.....: ', actualUrl);
  return (
    <div className="done-container">
      <div className="product-info">
        <div>
          <Link to={ specificRecipeURL }>
            <p data-testid={ `${cardIndex}-horizontal-name` }>{name}</p>
          </Link>
          <ShareButton { ...{ cardIndex, actualUrl } } />
          <div>
            {firstTwoTags.map((tag, tagIndex) => (
              <p key={ tagIndex } data-testid={ `${cardIndex}-${tag}-horizontal-tag` }>
                {tag}
                {tagIndex === 0 ? ' - ' : ''}
              </p>))}
          </div>
          <p data-testid={ `${cardIndex}-horizontal-top-text` }>
            {(nationality && category) ? `${nationality} - ${category}` : ''}
            {alcoholicOrNot}
          </p>
          <p
            data-testid={ `${cardIndex}-horizontal-done-date` }
          >
            {doneDate}
          </p>
        </div>
        <div className="product-image">
          <Link to={ specificRecipeURL }>
            <img
              data-testid={ `${cardIndex}-horizontal-image` }
              src={ image }
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

DoneRecipeCard.propTypes = {
  card: propTypes.shape({
    id: propTypes.string,
    type: propTypes.string,
    nationality: propTypes.string,
    category: propTypes.string,
    alcoholicOrNot: propTypes.string,
    doneDate: propTypes.string,
    name: propTypes.string,
    image: propTypes.string,
    tags: propTypes.string,
  }).isRequired,
  cardIndex: propTypes.number.isRequired,
};
