import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function SearchResults() {
  const { searchResults,
    sliceResults, search } = useSelector(({ receitasReducer }) => (receitasReducer));
  const history = useHistory();
  const dispatch = useDispatch();
  const MAX_LENGTH = 11;
  const EIGHT = 8;

  useEffect(() => {
    if (searchResults?.length === 1) {
      history.push(`/foods/${searchResults[0].idMeal}`);
    }
    if (searchResults?.length > 1) {
      const sliceMe = searchResults
        .reduce((acc, element, index) => {
          if (index < MAX_LENGTH && index !== EIGHT) {
            return [...acc, element];
          }
          return acc;
        }, []);
      dispatch({ type: 'SLICE', payload: sliceMe });
    } else if (search) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchResults, history, dispatch, search]);

  return (
    <div className="search-results">
      <h1>SearchResultsMeal</h1>
      <ul>
        {sliceResults && sliceResults.map((result, index) => (
          <li data-testid={ `${index}-recipe-card` } key={ result.idMeal }>
            <Link to={ result.idMeal }>
              <img
                data-testid={ `${index}-card-img` }
                alt={ result.strMeal }
                src={ result.strMealThumb }
              />
              <span data-testid={ `${index}-card-name` }>
                { result.strMeal }
              </span>
            </Link>
          </li>
        ))}
        {/* não utilizar ? junto com template literal nesse projeto... existe um bug na versão do lint que a trybe está utilizando.. as versões recentes já estão com esse bug corrigido. */}
      </ul>
    </div>
  );
}
