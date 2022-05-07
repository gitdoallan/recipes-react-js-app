import React from 'react';
import RecipeDetails from '../../components/RecipeDetails';

export default function RecipeFoodDetails() {
  return (
    <div>
      <h1>RecipeFoodDetails</h1>
      <RecipeDetails
        website="themealdb"
        type="foods"
        localStorageName="meals"
        keyType="meals"
        keyId="idMeal"
        title="strMeal"
        image="strMealThumb"
      />
    </div>
  );
}
