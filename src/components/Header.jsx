import React from 'react';
import propTypes from 'prop-types';
import useImage from '../services/useImage';

export default function Header(props) {
  const { altImg, testIdImg, srcImg, title, searchActive } = props;
  const image = useImage(srcImg);
  const searchImg = useImage('searchIcon');
  return (
    <div className="header">
      <img
        alt={ altImg }
        data-testid={ testIdImg }
        src={ image.image }
      />
      <h1 data-testid="page-title">{title}</h1>
      {searchActive
      && <img
        alt="Search"
        src={ searchImg.image }
        data-testid="search-top-btn"
      />}
    </div>
  );
}

Header.propTypes = {
  altImg: propTypes.string.isRequired,
  testIdImg: propTypes.string.isRequired,
  srcImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  searchActive: propTypes.bool.isRequired,
};
