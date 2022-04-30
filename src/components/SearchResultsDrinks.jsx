import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SearchResults() {
  const { searchResults } = useSelector(({ receitasReducer }) => (receitasReducer));
  const history = useHistory();
  useEffect(() => {
    if (searchResults?.length === 1) {
      history.push(`/drinks/${searchResults[0].idDrink}`);
    }
  }, [searchResults, history]);
  return (
    <div className="search-results">
      <h1>SearchResults</h1>
      <ul>
        {searchResults?.map((result) => (
          <li key={ result.idDrink }>
            <Link to={ result.idDrink }>
              <img alt={ result.strDrink } src={ result.strDrinkThumb } />
              { result.strDrink }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
