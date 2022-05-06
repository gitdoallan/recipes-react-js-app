import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function FoodInProgress() {
  const history = useHistory();
  return (
    <div>
      <div data-testid="ingredient-step">
        <p>
          DSR: Nome do ingrediente aqui
        </p>
      </div>
      <Button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => { history.push('/done-recipes'); } }
      >
        Finish Recipe
      </Button>
    </div>
  );
}
