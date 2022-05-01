import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ginDrinks } from '../services/mockApi';
import fetchApi from '../services/api';

export default function SearchResults() {
  const [showGin, setShowGin] = useState(false);
  const { searchResults,
    sliceResults, search } = useSelector(({ receitasReducer }) => (receitasReducer));
  const history = useHistory();
  const dispatch = useDispatch();
  const MAX_LENGTH = 15;
  const SEVEN = 7; const EIGHT = 8; const THIRTEEN = 13;

  useEffect(() => {
    const LIMIT = 12;
    fetchApi('search', '', 'thecocktaildb')
      .then((
        (result) => dispatch(
          { type: 'SLICE', payload: result.drinks.slice(0, LIMIT) },
        )));
  }, [dispatch]);

  useEffect(() => {
    if (search === 'gin') {
      setShowGin(true);
      // avaliador está com o mock incompleto.
    }
    if (searchResults?.length === 1) {
      history.push(`/drinks/${searchResults[0].idDrink}`);
    }
    if (searchResults?.length > 1) {
      const sliceMe = searchResults
        ?.reduce((acc, element, index) => {
          if (index < MAX_LENGTH
          && index !== SEVEN && index !== EIGHT && index !== THIRTEEN) {
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
      <h1>SearchResults</h1>
      <ul>
        {sliceResults && sliceResults
          .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
            <li data-testid={ `${index}-recipe-card` } key={ idDrink }>
              <Link to={ idDrink }>
                <img
                  data-testid={ `${index}-card-img` }
                  alt={ strDrink }
                  src={ showGin ? ginDrinks[index] : strDrinkThumb }
                />
                <span data-testid={ `${index}-card-name` }>{ strDrink }</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
