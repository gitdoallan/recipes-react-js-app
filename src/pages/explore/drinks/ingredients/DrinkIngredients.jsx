import React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import DrinkIngredientCard from '../../../../components/DrinkIngredientCard';

export default function DrinkIngredients() {
  return (
    <div>
      <Header
        title="Explore Ingredients"
        searchActive={ false }
      />
      <DrinkIngredientCard />
      <Footer />
    </div>
  );
}
