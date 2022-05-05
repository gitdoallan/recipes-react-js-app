import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDrinkByIngredient } from '../services/api';

function DrinkIngredientCard() {
  const [ingredients, setIngredients] = useState([]);
  const arrayLength = 12;

  const cardIngredients = async () => {
    const ingredientsByApi = await fetchDrinkByIngredient();
    setIngredients(ingredientsByApi);
  };

  useEffect(() => {
    cardIngredients();
  }, []);

  return (
    <div>
      {
        ingredients.slice(0, arrayLength).map((card, index) => (
          <Link
            to="/dinks"
            data-testid={ `${index}-ingredient-card` }
            key={ index }
          >
            <div
              key={ index }
              data-testid={ `${index}-card-name` }
            >
              {card.strIngredient1}
              <img
                data-testid={ `${index}-card-img` }
                alt={ card.strIngredient1 }
                src={
                  `www.thecocktaildb.com/images/ingredients/
                  ${card.strIngredient1}.png`
                }
              />
            </div>
          </Link>

        ))
      }
    </div>
  );
}

export default DrinkIngredientCard;
