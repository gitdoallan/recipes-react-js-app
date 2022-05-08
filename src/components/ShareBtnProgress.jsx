import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import clipboard from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

export default function ShareBtnProgress({ actualUrl }) {
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
      data-testid="share-btn"
      src={ shareIcon }
      onClick={ () => urlToClipboard() }
    >
      { activeButton ? <img src={ shareIcon } alt="Share" /> : <p>Link copied!</p>}

    </button>
  );
}
ShareBtnProgress.propTypes = {
  actualUrl: PropTypes.string,
}.isRequired;

// ShareButton.defaultProps = { cardIndex: 0 };
