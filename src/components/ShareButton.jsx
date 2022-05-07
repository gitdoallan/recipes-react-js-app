import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import clipboard from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ cardIndex, actualUrl }) {
  console.log('URL....: ', actualUrl);
  const [activeButton, setActiveButton] = useState(true);

  const urlToClipboard = () => {
    const time = 2500;
    clipboard(actualUrl);
    setActiveButton(false);
    setTimeout(() => setActiveButton(true), time);
  };

  return (
    <button
      type="button"
      data-testid={ `${cardIndex}-horizontal-share-btn` }
      src={ shareIcon }
      onClick={ () => urlToClipboard() }
    >
      { activeButton ? <img src={ shareIcon } alt="Share" /> : <p>Link copied!</p>}

    </button>
  );
}
ShareButton.propTypes = {
  cardIndex: PropTypes.number,
  actualUrl: PropTypes.string,
}.isRequired;

// ShareButton.defaultProps = { cardIndex: 0 };
