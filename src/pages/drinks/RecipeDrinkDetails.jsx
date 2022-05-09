import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../../components/RecipeDetails';
import RecommendationCard from '../../components/RecommendationCard';
import { fetchApi } from '../../services/api';
import { RELATED_MAXSIZE } from '../../helpers/magicNumbers';

export default function RecipeDrinkDetails() {
  const { id } = useParams();
  const [related, setRelated] = useState([]);

  console.log(related);

  useEffect(() => {
    fetchApi('search', '', 'themealdb')
      .then((data) => setRelated(data.meals.slice(0, RELATED_MAXSIZE)))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>RecipeDrinkDetails</h1>
      <RecipeDetails
        website="thecocktaildb"
        type="drinks"
        favtype="drink"
        localStorageName="cocktails"
        keyType="drinks"
        title="strDrink"
        image="strDrinkThumb"
      />

      <h3>Recomendações:</h3>

      <ul data-testid="recommendation-card">
        {Array(2).fill('').map((e, index) => (
          <RecommendationCard
            testIdRecipeCard={ `${index}-recomendation-card` }
            type="foods"
            key={ `recomendation-${index}` }
            keyId={ related[index]?.idMeal }
            image={ related[index]?.strMealThumb }
            title={ related[index]?.strMeal }
          />
        ))}
        {/* o teste só pega no formato acima... descomentar o abaixo depois. */}
        {/* {related.map((e, index) => (
          <RecommendationCard
            testIdRecipeCard={ `${index}-recomendation-card` }
            type="foods"
            key={ `recomendation-${index}` }
            keyId={ e.idMeal }
            image={ e.strMealThumb }
            title={ e.strMeal }
          />
        ))} */}
      </ul>
    </div>
  );
}
