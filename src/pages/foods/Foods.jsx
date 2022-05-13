import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchResults from '../../components/SearchResults';
import ListCategories from '../../components/ListCategories';

export default function Foods() {
  const { filterByCategory, currentCategory } = useSelector(
    ({ receitasReducer }) => (receitasReducer),
  );
  return (
    <div>
      <Header
        title="Foods"
        searchActive
      />
      <h1>FoodsPage</h1>
      <h2>ListCategories:</h2>
      <ListCategories
        filter="listCategories"
        website="themealdb"
        keyType="meals"
      />
      {filterByCategory
        ? (
          <SearchResults
            website="themealdb"
            type="foods"
            keyType="meals"
            searchTerm={ currentCategory }
            action="byCategory"
            strId="idMeal"
            strKey="strMeal"
            strThumb="strMealThumb"
          />
        )
        : (
          <SearchResults
            website="themealdb"
            type="foods"
            keyType="meals"
            action="search"
            searchTerm=""
            strId="idMeal"
            strKey="strMeal"
            strThumb="strMealThumb"
          />

        )}
      <Footer />
    </div>
  );
}
