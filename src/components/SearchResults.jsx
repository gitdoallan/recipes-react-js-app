import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApi } from '../services/api';
import { MAX_SEARCH_RESULTS } from '../helpers/magicNumbers';

export default function SearchResults(
  { type, website, action, keyType, searchTerm, strId, strKey, strThumb },
) {
  const { searchResults,
    sliceResults, search } = useSelector(({ receitasReducer }) => (receitasReducer));
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi(action, searchTerm, website)
      .then((
        (result) => dispatch(
          { type: 'SLICE',
            payload: result[keyType].slice(0, MAX_SEARCH_RESULTS) },
        )));
  }, [dispatch, action, website, keyType, searchTerm]);

  useEffect(() => {
    if (searchResults?.length === 1 && action === 'search') {
      history.push(`/${type}/${searchResults[0][strId]}`);
    }
    if (searchResults?.length > 1) {
      dispatch({ type: 'SLICE', payload: searchResults.slice(0, MAX_SEARCH_RESULTS) });
    }
    if (searchResults?.length === 0 && action === 'search' && searchTerm.length > 0) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchResults, history, search, dispatch, type, strKey, searchTerm, action, strId]);

  useEffect(() => {
    console.log(sliceResults);
  }, [sliceResults]);
  return (
    <div className="search-results">
      <h1>SearchResults</h1>
      <ul>
        {sliceResults && sliceResults.map((result, index) => (
          <li data-testid={ `${index}-recipe-card` } key={ result[strId] }>
            <Link to={ `/${type}/${result[strId]}` }>
              <img
                data-testid={ `${index}-card-img` }
                alt={ result[strKey] }
                src={ result[strThumb] }
              />
              <span data-testid={ `${index}-card-name` }>
                { result[strKey] }
              </span>
            </Link>
          </li>
        ))}
        {/* não utilizar ? junto com template literal nesse projeto... existe um bug na versão do lint que a trybe está utilizando.. as versões recentes já estão com esse bug corrigido. */}
      </ul>
    </div>
  );
}

SearchResults.propTypes = {
  type: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  action: propTypes.string.isRequired,
  keyType: propTypes.string.isRequired,
  strId: propTypes.string.isRequired,
  strKey: propTypes.string.isRequired,
  strThumb: propTypes.string.isRequired,
  searchTerm: propTypes.string.isRequired,
};