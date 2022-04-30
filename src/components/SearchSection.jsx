import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePath } from 'hookrouter';
import fetchApi from '../services/api';

export default function SearchSection() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ingredient');
  const [website, setWebsite] = useState('');
  const path = usePath();
  const dispatch = useDispatch();

  useEffect(() => {
    const cases = {
      '/foods': () => setWebsite('themealdb'),
      '/drinks': () => setWebsite('thecocktaildb'),
    };
    return cases[path]();
  }, [path]);

  const handleSearch = async (e) => {
    e.preventDefault();
    fetchApi(filter, search, website).then((data) => data.meals)
      .then((searchResults) => dispatch(
        { type: 'SEARCH', payload: { search, searchResults } },
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
          Ingredient
          <input
            type="radio"
            id="ingredient-search-radio"
            name="search-type"
            data-testid="ingredient-search-radio"
            onChange={ () => setFilter('ingredient') }
            defaultChecked
          />
        </label>
        <label htmlFor="name-search-radio">
          Name
          <input
            type="radio"
            id="name-search-radio"
            name="search-type"
            onChange={ () => setFilter('search') }
            data-testid="name-search-radio"
          />
        </label>
        <label htmlFor="first-letter-search-radio">
          First Letter
          <input
            type="radio"
            id="first-letter-search-radio"
            name="search-type"
            onChange={ () => setFilter('firstLetter') }
            data-testid="first-letter-search-radio"
          />
        </label>
        <button data-testid="exec-search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}
