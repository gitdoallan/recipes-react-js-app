import React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import FoodIngredientCard from '../../../../components/FoodIngredientCard';

export default function FoodIngredients() {
  return (
    <div>
      <Header
        title="Explore Ingredients"
        searchActive={ false }
      />
      <FoodIngredientCard />
      <Footer />
    </div>
  );
}
