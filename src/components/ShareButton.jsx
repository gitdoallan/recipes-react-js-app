import React from 'react';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ cardIndex }) {
  return (
    <Button
      type="button"
      data-testid={ `${cardIndex}-horizontal-share-btn` }
    >
      <img src={ shareIcon } alt="Share" />

    </Button>
  );
}
ShareButton.propTypes = {
  cardIndex: propTypes.number,
};

ShareButton.defaultProps = { cardIndex: 0 };
