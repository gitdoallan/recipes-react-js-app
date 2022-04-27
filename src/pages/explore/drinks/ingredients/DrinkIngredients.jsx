import React from 'react';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

export default function DrinkIngredients() {
  return (
    <div>
      <Header
        altImg="Explore Ingredients"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Explore Ingredients"
        searchActive={ false }
      />
      <Footer />
    </div>
  );
}
