import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/foods/Foods';
import Drinks from '../pages/drinks/Drinks';
import RecipeFoodDetails from '../pages/foods/RecipeFoodDetails';
import RecipeDrinkDetails from '../pages/drinks/RecipeDrinkDetails';
import RecipeFoodInProgress from '../pages/foods/RecipeFoodInProgress';
import RecipeDrinkInProgress from '../pages/drinks/RecipeDrinkInProgress';
import Explore from '../pages/explore/Explore';
import ExploreFood from '../pages/explore/foods/ExploreFood';
import ExploreDrinks from '../pages/explore/drinks/ExploreDrinks';
import FoodIngredients from '../pages/explore/foods/ingredients/FoodIngredients';
import DrinkIngredients from '../pages/explore/drinks/ingredients/DrinkIngredients';
import FoodNationalities from '../pages/explore/foods/nationalities/FoodNationalities';
import Profile from '../pages/Profile';
import DoneRecipes from '../pages/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes';

import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route component={ NotFound } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/foods/{id}" component={ RecipeFoodDetails } />
        <Route path="/drinks/{id}" component={ RecipeDrinkDetails } />
        <Route path="/foods/{id}/in-progress" component={ RecipeFoodInProgress } />
        <Route path="/drinks/{id}/in-progress" component={ RecipeDrinkInProgress } />
        <Route path="/explore" component={ Explore } />
        <Route path="/explore/foods" component={ ExploreFood } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route path="/explore/foods/ingredients" component={ FoodIngredients } />
        <Route path="/explore/drinks/ingredients" component={ DrinkIngredients } />
        <Route path="/explore/foods/nationalities" component={ FoodNationalities } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </BrowserRouter>
  );
}
