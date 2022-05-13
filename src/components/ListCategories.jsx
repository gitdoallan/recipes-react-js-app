import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { LIMIT_CATEGORY_LIST } from '../helpers/magicNumbers';
import { fetchApi } from '../services/api';
import * as S from '../styles/ListCategories';

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
    <S.ListCategories>
      <Button
        variant={ currentCategory === 'all' ? 'contained' : 'outlined' }
        onClick={ () => handleBtnClick('all') }
      >
        All
      </Button>
      {categories.map(({ strCategory }) => (
        <Button
          variant={ currentCategory === strCategory ? 'contained' : 'outlined' }
          key={ strCategory }
          onClick={ () => handleBtnClick(strCategory) }
        >
          {strCategory}
        </Button>
      ))}
    </S.ListCategories>
  );
}

ListCategories.propTypes = {
  filter: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  keyType: propTypes.string.isRequired,
};

export default ListCategories;
