import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Foods() {
  return (
    <div>
      <Header
        title="Foods"
        searchActive
      />
      {/* <HeaderMUI /> */}
      <h1>FoodsPage</h1>
      <Footer />
    </div>
  );
}
