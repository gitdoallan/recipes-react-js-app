import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
import '../styles/DoneRecipes.css';

export default function DoneRecipeCard({ card, cardIndex }) {
  const { id, type, area, category, alcoholicOrNot, doneDate, name, image, tags } = card;
  const firstTwoTags = Array.from(tags.toString().split(',').slice(0, 2));
  const specificRecipeURL = `/${type}s/${id}`;
  console.log('TWO TAGS.......: ', firstTwoTags);
  return (
    <div>
      <div className="product-info">
        <div>
          <Link to={ specificRecipeURL }>
            <p data-testid={ `${cardIndex}-horizontal-name` }>{name}</p>
          </Link>
          <ShareButton cardIndex={ cardIndex } />
          <p>
            {firstTwoTags.map((tag, tagIndex) => (
              <p key={ tagIndex } data-testid={ `${cardIndex}-${tag}-horizontal-tag` }>
                {tag}
                {tagIndex === 0 ? ' - ' : ''}
              </p>))}
          </p>
          <p data-testid={ `${cardIndex}-horizontal-top-text` }>
            {area ? `${area} - ` : ''}
            {category ? `${category}` : ''}
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
    id: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    area: propTypes.string,
    category: propTypes.string,
    alcoholicOrNot: propTypes.string,
    doneDate: propTypes.string,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  }).isRequired,
  cardIndex: propTypes.number.isRequired,
};
