import React from 'react';
import Header from '../components/Header';

export default function DoneRecipes() {
  return (
    <div>
      <Header
        altImg="Done Recipes"
        srcImg="profileIcon"
        testIdImg="profile-top-btn"
        title="Done Recipes"
        searchActive={ false }
      />
      <div>DoneRecipes</div>
    </div>
  );
}
