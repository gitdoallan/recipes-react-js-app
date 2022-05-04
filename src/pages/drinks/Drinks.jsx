import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchResults from '../../components/SearchResults';
import ListCategories from '../../components/ListCategories';

export default function Drinks() {
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
      />
      <SearchResults
        website="thecocktaildb"
        type="drinks"
        keyType="drinks"
        action="search"
        strId="idDrink"
        strKey="strDrink"
        strThumb="strDrinkThumb"
      />
      <Footer />
    </div>
  );
}
