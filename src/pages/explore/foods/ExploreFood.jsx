import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ExploreFood() {
  return (
    <div>
      <Header
        altImg="Explore Food"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Explore Foods"
        searchActive={ false }
      />
      <Footer />
    </div>
  );
}
