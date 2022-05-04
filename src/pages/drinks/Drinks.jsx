import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchResults from '../../components/SearchResults';

export default function Drinks() {
  return (
    <div>
      <Header
        title="Drinks"
        searchActive
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
