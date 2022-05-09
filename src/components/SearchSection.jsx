import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePath } from 'hookrouter';
import { fetchApi } from '../services/api';

export default function SearchSection() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ingredient');
  const [website, setWebsite] = useState('');
  const currentPath = usePath();
  const path = currentPath.replace('/', '');
  const dispatch = useDispatch();

  useEffect(() => {
    const cases = {
      foods: () => setWebsite({ url: 'themealdb', tag: 'meals' }),
      drinks: () => setWebsite({ url: 'thecocktaildb', tag: 'drinks' }),
    };
    return cases[path] && cases[path]();
  }, [path]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const { url, tag } = website;
    if (filter === 'firstLetter' && search.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    fetchApi(filter, search, url).then((data) => data[tag])
      .then((searchResults) => dispatch(
        { type: 'SEARCH', payload: { search, searchResults, filterByCategory: false } },
      ))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={ handleSearch }>
        <input
          onChange={ (e) => setSearch(e.target.value) }
          value={ search }
          type="text"
          placeholder="Search..."
          data-testid="search-input"
        />
        <label htmlFor="ingredient-search-radio">
          <input
            type="radio"
            id="ingredient-search-radio"
            name="search-type"
            data-testid="ingredient-search-radio"
            onChange={ () => setFilter('ingredient') }
            defaultChecked
          />
          Ingredient
        </label>
        <label htmlFor="name-search-radio">
          <input
            type="radio"
            id="name-search-radio"
            name="search-type"
            onChange={ () => setFilter('search') }
            data-testid="name-search-radio"
          />
          Name
        </label>
        <label htmlFor="first-letter-search-radio">
          <input
            type="radio"
            id="first-letter-search-radio"
            name="search-type"
            onChange={ () => setFilter('firstLetter') }
            data-testid="first-letter-search-radio"
          />
          First Letter
        </label>
        <button data-testid="exec-search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}
