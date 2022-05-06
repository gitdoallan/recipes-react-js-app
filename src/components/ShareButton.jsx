import React from 'react';
// import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ cardIndex, url }) {
  console.log('URL....: ', url);
  return (
    <button
      type="button"
      data-testid={ `${cardIndex}-horizontal-share-btn` }
      src={ shareIcon }
    >
      <img src={ shareIcon } alt="Share" />

    </button>
  );
}
ShareButton.propTypes = {
  cardIndex: PropTypes.number,
  url: PropTypes.string.isRequired,
};

ShareButton.defaultProps = { cardIndex: 0 };
