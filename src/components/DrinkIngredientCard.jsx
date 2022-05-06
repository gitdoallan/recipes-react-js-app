import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchDrinkByIngredient } from '../services/api';

function DrinkIngredientCard() {
  const [ingredients, setIngredients] = useState([]);
  const ARRAY_LENGTH = 12;

  const cardIngredients = async () => {
    const ingredientsByApi = await fetchDrinkByIngredient();
    const results = ingredientsByApi.slice(0, ARRAY_LENGTH);
    setIngredients(results);
  };

  useEffect(() => {
    cardIngredients();
  }, []);

  return (
    <div>
      {
        ingredients.map((card, index) => (
          <Link
            to="/drinks"
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
                src={ `https://www.thecocktaildb.com/images/ingredients/${card.strIngredient1}-Small.png
                ` }
              />
            </div>
          </Link>

        ))
      }
    </div>
  );
}

export default DrinkIngredientCard;
