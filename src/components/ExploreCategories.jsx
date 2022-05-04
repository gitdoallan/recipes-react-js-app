import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ExploreCategories() {
  const history = useHistory();
  return (
    <div>
      <button
        data-testid="foods-category-filter"
        onClick={ () => history.push('/explore/foods') }
        type="button"
      >
        Foods
      </button>
      <button
        data-testid="drinks-category-filter"
        type="button"
        onClick={ () => history.push('/explore/drinks') }
      >
        Drinks
      </button>
    </div>
  );
}
