import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ExploreDrinks() {
  return (
    <div>
      <Header
        altImg="Explore Drinks"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Explore Drinks"
        searchActive={ false }
      />
      <Footer />
    </div>
  );
}
