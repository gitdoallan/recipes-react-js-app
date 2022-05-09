import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../../components/RecipeDetails';
import RecommendationCard from '../../components/RecommendationCard';
import { fetchApi } from '../../services/api';
import { RELATED_MAXSIZE } from '../../helpers/magicNumbers';

export default function RecipeFoodDetails() {
  const { id } = useParams();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetchApi('search', '', 'thecocktaildb')
      .then((data) => setRelated(data.drinks.slice(0, RELATED_MAXSIZE)))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>RecipeFoodDetails</h1>
      <RecipeDetails
        website="themealdb"
        type="foods"
        favtype="food"
        localStorageName="meals"
        keyType="meals"
        keyId="idMeal"
        title="strMeal"
        image="strMealThumb"
      />
      <ul data-testid="recommendation-card">
        {Array(2).fill('').map((e, index) => (
          <RecommendationCard
            testIdRecipeCard={ `${index}-recomendation-card` }
            type="foods"
            key={ `recomendation-${index}` }
            keyId={ related[index]?.idDrink }
            image={ related[index]?.strDrinkThumb }
            title={ related[index]?.strDrink }
          />
        ))}
        {/* o teste só pega no formato acima... descomentar o abaixo depois. */}
        {/* {related.map((e, index) => (
          <RecommendationCard
            testIdRecipeCard={ `${index}-recomendation-card` }
            type="foods"
            key={ `recomendation-${index}` }
            keyId={ e.idDrink }
            image={ e.strDrinkThumb }
            title={ e.str }
          />
        ))} */}
      </ul>
    </div>
  );
}
