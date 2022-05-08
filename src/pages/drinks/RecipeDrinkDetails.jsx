import React from 'react';
import RecipeDetails from '../../components/RecipeDetails';

export default function RecipeDrinkDetails() {
  return (
    <div>
      <h1>RecipeDrinkDetails</h1>
      <RecipeDetails
        website="thecocktaildb"
        type="drinks"
        favtype="drink"
        localStorageName="cocktails"
        keyType="drinks"
        keyId="idDrink"
        title="strDrink"
        image="strDrinkThumb"
      />
    </div>
  );
}
