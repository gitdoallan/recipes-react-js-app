import React, { useState } from 'react';
import propTypes from 'prop-types';

export default function Share({ copyType, copyMsg, btnText }) {
  const [copied, setCopied] = useState(false);
  const share = () => {
    const cases = {
      url: () => navigator.clipboard.writeText(window.location.href),
    };
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, '1000');
    return cases[copyType]();
  };
  return (
    <div>
      { copied
        ? <p>{copyMsg}</p>
        : (
          <button
            data-testid="share-btn"
            onClick={ share }
            type="button"
          >
            {btnText}
          </button>) }
    </div>
  );
}

Share.propTypes = {
  copyType: propTypes.string.isRequired,
  copyMsg: propTypes.string.isRequired,
  btnText: propTypes.string.isRequired,
};
