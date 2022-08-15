import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePath } from 'hookrouter';
import SearchIcon from '@mui/icons-material/Search';
// import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles/Header';
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
    <>

      <FormControl sx={ { m: 1, minWidth: 120 } } size="small">
        <InputLabel id="demo-select-small">Filters</InputLabel>
        <Select
          color="primary"
          labelId="demo-select-small"
          id="demo-select-small"
          value={ filter }
          label="Filter"
          onChange={ (e) => setFilter(e.target.value) }
        >
          <MenuItem value="ingredient">Ingredient</MenuItem>
          <MenuItem value="search">Name</MenuItem>
          <MenuItem value="firstLetter">First Letter</MenuItem>
        </Select>
      </FormControl>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onKeyDown={ (e) => e.key === 'Enter' && handleSearch(e) }
          onChange={ (e) => setSearch(e.target.value) }
          value={ search }
          placeholder="Search…"
          data-testid="search-top-btn"
          inputProps={ { 'aria-label': 'search' } }
        />
      </Search>
      {/* <Button
        variant="contained"
        onClick={ (e) => handleSearch(e) }
        type="submit"
      >
        <SearchIcon />
      </Button> */}
    </>
  );
}
