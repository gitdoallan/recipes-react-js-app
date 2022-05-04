import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { LIMIT_CATEGORY_LIST } from '../helpers/magicNumbers';
import { fetchApi } from '../services/api';

function ListCategories(props) {
  const { filter, website, type } = props;
  const [categories, setCategories] = useState([]);

  console.log(categories, filter, website, type);

  useEffect(() => {
    fetchApi(filter, null, website)
      .then((data) => setCategories(data[type].slice(0, LIMIT_CATEGORY_LIST)))
      .catch((err) => console.log(err));
  }, [filter, website, type]);

  return (
    <div>
      {categories.map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          key={ strCategory }
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
  type: propTypes.string.isRequired,
};

export default ListCategories;
