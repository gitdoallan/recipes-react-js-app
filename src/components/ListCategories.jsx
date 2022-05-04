import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { LIMIT_CATEGORY_LIST } from '../helpers/magicNumbers';
import { fetchApi } from '../services/api';

function ListCategories({ filter, website, keyType }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchApi(filter, null, website)
      .then((data) => setCategories(data[keyType].slice(0, LIMIT_CATEGORY_LIST)))
      .catch((err) => console.log(err));
  }, [filter, website, keyType]);

  return (
    <div>
      {categories.map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          key={ strCategory }
          onClick={ () => dispatch({ type: 'FILTER_CATEGORY', payload: strCategory }) }
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
