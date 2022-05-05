import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMealByIngredient } from '../services/api';

function FoodIngredientCard() {
  const [ingredients, setIngredients] = useState([]);
  console.log(ingredients);
  const arrayLength = 12;

  const cardIngredients = async () => {
    const ingredientsByApi = await fetchMealByIngredient();
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
            to="/foods"
            data-testid={ `${index}-ingredient-card` }
            key={ index }
          >
            {console.log(ingredients)}
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
