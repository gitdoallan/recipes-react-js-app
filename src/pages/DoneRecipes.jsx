import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage-state';
import { Button, Form } from 'react-bootstrap';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';
import { twoDoneRecipes } from '../services/mockApi';
// import { includeDoneRecipe } from '../services/localStorage';
import '../styles/DoneRecipes.css';

export default function DoneRecipes() {
  // includeDoneRecipe(twoDoneRecipes[0]);
  const [foods, setFoods] = useState([]);
  // const [doneRecipes] = useLocalStorage('doneRecipes', []);
  const [doneRecipes] = useLocalStorage('doneRecipes', [twoDoneRecipes]);

  useEffect(() => setFoods(doneRecipes), [doneRecipes]);
  console.log('DONE RECIPES.......: ', doneRecipes);
  console.log('FOODS....: ', foods);
  console.log('TWO RECIPES.....: ', twoDoneRecipes);

  const filterRecipeByType = (foodType) => {
    if (foodType) {
      const filteredRecipes = doneRecipes.filter((food) => food.type === foodType);
      return setFoods(filteredRecipes);
    }
    return setFoods(doneRecipes);
  };

  const cardsOnScreen = (cardsRender) => (
    cardsRender.length !== 0 && cardsRender.map((card, cardIndex) => {
      console.log('CARDINDEX.origem.....: ', cardIndex);
      return (
        <DoneRecipeCard key={ cardIndex } { ...{ card, cardIndex } } />
      );
    }));

  return (
    <>
      <Header
        title="Done Recipes"
        searchActive={ false }
      />
      <main>
        <Form>
          <Button
            variant="outline-secondary"
            data-testid="filter-by-all-btn"
            onClick={ () => filterRecipeByType() }
          >
            All
          </Button>
          <Button
            variant="outline-primary"
            data-testid="filter-by-food-btn"
            onClick={ () => filterRecipeByType('food') }
          >
            Food
          </Button>
          <Button
            variant="outline-success"
            data-testid="filter-by-drink-btn"
            onClick={ () => filterRecipeByType('drink') }
          >
            Drinks
          </Button>
        </Form>
        <div className="done-recipe">{cardsOnScreen(foods)}</div>
      </main>
    </>
  );
}
