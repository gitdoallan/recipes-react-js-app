import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ExploreCategories() {
  const history = useHistory();
  return (
    <div>
      <button
        data-testid="explore-foods"
        onClick={ () => history.push('/explore/foods') }
        type="button"
      >
        Explore Foods
      </button>
      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
    </div>
  );
}
