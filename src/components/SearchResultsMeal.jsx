import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SearchResults() {
  const { searchResults } = useSelector(({ receitasReducer }) => (receitasReducer));
  const history = useHistory();
  useEffect(() => {
    if (searchResults?.length === 1) {
      history.push(`/foods/${searchResults[0].idMeal}`);
    }
  }, [searchResults, history]);

  return (
    <div className="search-results">
      <h1>SearchResults</h1>
      <ul>
        {searchResults?.map((result) => (
          <li key={ result.idMeal }>
            <Link to={ result.idMeal }>
              <img alt={ result.strMeal } src={ result.strMealThumb } />
              { result.strMeal }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
