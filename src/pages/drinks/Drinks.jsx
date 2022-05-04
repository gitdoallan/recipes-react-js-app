import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchResults from '../../components/SearchResults';
import ListCategories from '../../components/ListCategories';

export default function Drinks() {
  const { filterByCategory, currentCategory } = useSelector(
    ({ receitasReducer }) => (receitasReducer),
  );
  return (
    <div>
      <Header
        title="Drinks"
        searchActive
      />
      <ListCategories
        filter="listCategories"
        website="thecocktaildb"
        type="drinks"
        keyType="drinks"
      />
      {filterByCategory
        ? (
          <SearchResults
            website="thecocktaildb"
            type="drinks"
            searchTerm={ currentCategory }
            keyType="drinks"
            action="byCategory"
            strId="idDrink"
            strKey="strDrink"
            strThumb="strDrinkThumb"
          />
        )
        : (
          <SearchResults
            website="thecocktaildb"
            type="drinks"
            searchTerm=""
            keyType="drinks"
            action="search"
            strId="idDrink"
            strKey="strDrink"
            strThumb="strDrinkThumb"
          />
        )}
      <Footer />
    </div>
  );
}
