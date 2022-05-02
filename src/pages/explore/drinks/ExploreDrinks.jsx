import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ExploreDrinks() {
  return (
    <div>
      <Header
        title="Explore Drinks"
        searchActive={ false }
      />
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}
