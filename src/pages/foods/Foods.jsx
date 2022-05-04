import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchResults from '../../components/SearchResults';
import ListCategories from '../../components/ListCategories';

export default function Foods() {
  return (
    <div>
      <Header
        title="Foods"
        searchActive
      />
      {/* <HeaderMUI /> */}
      <h1>FoodsPage</h1>
      <h2>ListCategories:</h2>
      <ListCategories
        filter="listCategories"
        website="themealdb"
        type="meals"
      />
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
