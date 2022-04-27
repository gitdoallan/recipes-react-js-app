import React from 'react';
import Header from '../components/Header';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header
        altImg="Favorite Recipes"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Favorite Recipes"
        searchActive={ false }
      />
    </div>
  );
}
