import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMealByIngredient } from '../services/api';

function FoodIngredientCard() {
  const [ingredients, setIngredients] = useState([]);
  const ARRAY_LENGTH = 12;

  const cardIngredients = async () => {
    const ingredientsByApi = await fetchMealByIngredient();
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
            to="/foods"
            data-testid={ `${index}-ingredient-card` }
            key={ index }
          >
            <div
              key={ index }
              data-testid={ `${index}-card-name` }
            >
              {card.strIngredient}
              <img
                data-testid={ `${index}-card-img` }
                alt={ card.strIngredient }
                src={ `https://www.themealdb.com/images/ingredients/${card.strIngredient}-Small.png
                ` }
              />
            </div>
          </Link>

        ))
      }
    </div>
  );
}

export default FoodIngredientCard;
