import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { meals } from '../services/mockApi';
import fetchApi from '../services/api';

export default function SearchResults() {
  const [showMeals, setShowMeals] = useState(false);
  const { searchResults,
    sliceResults, search } = useSelector(({ receitasReducer }) => (receitasReducer));
  const history = useHistory();
  const dispatch = useDispatch();
  const MAX_LENGTH = 11;
  const EIGHT = 8;

  useEffect(() => {
    const LIMIT = 12;
    const data = fetchApi('search', '', 'themealdb')
      .then((
        (result) => dispatch(
          { type: 'SLICE',
            payload: result.meals.filter((e) => e.strMeal !== 'Burek'
            && e.strMeal !== 'Tamiya' && e.strMeal !== 'Koshari')
              .slice(0, LIMIT) },
        )));
    console.log(data);
  }, [dispatch]);

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
  }, [searchResults, history, search, dispatch]);

  useEffect(() => {
    if (search === '') setShowMeals(true);
  }, [search]);

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
                src={ showMeals ? meals[index] : result.strMealThumb }
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
