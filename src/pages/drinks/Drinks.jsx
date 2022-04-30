import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchResultsDrinks from '../../components/SearchResultsDrinks';

export default function Drinks() {
  return (
    <div>
      <Header
        title="Drinks"
        searchActive
      />
      <SearchResultsDrinks />
      <Footer />
    </div>
  );
}
