import React from 'react';
import Header from '../../components/Header';
import ExploreCategories from '../../components/ExploreCategories';
import Footer from '../../components/Footer';

export default function Explore() {
  return (
    <div>
      <Header
        altImg="Explore"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Explore"
        searchActive={ false }
      />
      <ExploreCategories />
      <Footer />
    </div>
  );
}
