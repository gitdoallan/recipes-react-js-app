import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { fetchRandomRecipe } from '../../../services/api';

export default function ExploreFood() {
  const history = useHistory();

  const surpriseMe = async () => {
    const id = await fetchRandomRecipe(true).then((res) => {
      const mealInfo = (Object.values(res)[0][0]); // o retorno dos detalhes da receita está na posição [0][0]
      return mealInfo.idMeal;
    });
    history.push(`/foods/${id}`);
  };

  return (
    <div>
      <Header
        title="Explore Foods"
        searchActive={ false }
      />
      <Link to="/explore/foods/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ surpriseMe }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}
