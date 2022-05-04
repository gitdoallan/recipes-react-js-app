import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { fetchRandomRecipe } from '../../../services/api';

export default function ExploreDrinks() {
  const history = useHistory();

  const surpriseMe = async () => {
    const id = await fetchRandomRecipe(false).then((res) => {
      const drinkInfo = (Object.values(res)[0][0]); // o retorno dos detalhes da receita está na posição [0][0]
      return drinkInfo.idDrink;
    });
    history.push(`/drinks/${id}`);
  };
  return (
    <div>
      <Header
        title="Explore Drinks"
        searchActive={ false }
      />
      <Link to="/explore/drinks/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
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
