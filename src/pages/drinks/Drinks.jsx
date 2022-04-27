import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Drinks() {
  return (
    <div>
      <Header
        altImg="Drinks"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Drinks"
        searchActive
      />
      <Footer />
    </div>
  );
}
