import React, { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage-state';
import { Button, Form } from 'react-bootstrap';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';
import '../styles/DoneRecipes.css';

export default function DoneRecipes() {
  const [foods, setFoods] = useState([]);
  const [doneRecipes] = useLocalStorage('doneRecipes', []);
  console.log('DONE RECIPES.......: ', doneRecipes);
  useEffect(() => setFoods(doneRecipes), [doneRecipes]);

  const filterRecipeByCategory = (foodType) => {
    if (foodType) {
      const filteredRecipes = doneRecipes.filter((food) => food.type === foodType);
      return setFoods(filteredRecipes);
    }
    return setFoods(doneRecipes);
  };

  const cardsOnScreen = (cardsRender) => (
    cardsRender.length !== 0 && cardsRender.map((card, cardIndex) => (
      (
        <DoneRecipeCard key={ cardIndex } { ...{ card, cardIndex } } />
      ))));

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
            onClick={ () => filterRecipeByCategory() }
          >
            All
          </Button>
          <Button
            variant="outline-primary"
            data-testid="filter-by-food-btn"
            onClick={ () => filterRecipeByCategory() }
          >
            Food
          </Button>
          <Button
            variant="outline-success"
            data-testid="filter-by-drink-btn"
            onClick={ () => filterRecipeByCategory() }
          >
            Drinks
          </Button>
        </Form>
        <div className="done-recipe">{cardsOnScreen(foods)}</div>
      </main>
    </>
  );
}
