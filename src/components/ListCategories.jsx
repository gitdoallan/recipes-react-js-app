import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LIMIT_CATEGORY_LIST } from '../helpers/magicNumbers';
import { fetchApi } from '../services/api';

function ListCategories({ filter, website, keyType }) {
  const dispatch = useDispatch();
  const {
    currentCategory, filterByCategory,
  } = useSelector(({ receitasReducer }) => (receitasReducer));
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(currentCategory);
  }, [currentCategory]);

  const handleBtnClick = (category) => {
    if (category === 'all') {
      dispatch(
        { type: 'FILTER_CATEGORY',
          payload: {
            currentCategory: category, filterByCategory: false } },
      );
    } else if (category === currentCategory) {
      dispatch(
        { type: 'FILTER_CATEGORY',
          payload: {
            currentCategory: category, filterByCategory: !filterByCategory } },
      );
    } else {
      dispatch(
        { type: 'FILTER_CATEGORY',
          payload: {
            currentCategory: category, filterByCategory: true } },
      );
    }
  };

  useEffect(() => {
    fetchApi(filter, null, website)
      .then((data) => setCategories(data[keyType].slice(0, LIMIT_CATEGORY_LIST)))
      .catch((err) => console.log(err));
  }, [filter, website, keyType]);

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => handleBtnClick('all') }
      >
        All
      </button>
      {categories.map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          key={ strCategory }
          onClick={ () => handleBtnClick(strCategory) }
        >
          {strCategory}
        </button>
      ))}
    </div>
  );
}

ListCategories.propTypes = {
  filter: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  keyType: propTypes.string.isRequired,
};

export default ListCategories;
