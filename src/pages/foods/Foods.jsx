import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchResults from '../../components/SearchResults';

export default function Foods() {
  return (
    <div>
      <Header
        title="Foods"
        searchActive
      />
      {/* <HeaderMUI /> */}
      <h1>FoodsPage</h1>
      <SearchResults
        website="themealdb"
        type="foods"
        keyType="meals"
        action="search"
        strId="idMeal"
        strKey="strMeal"
        strThumb="strMealThumb"
      />
      <Footer />
    </div>
  );
}
