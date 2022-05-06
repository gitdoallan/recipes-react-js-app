import useLocalStorage from 'use-local-storage-state';

export const getLocalStorage = (nameItem) => JSON.parse(localStorage.getItem(nameItem));

export const setLocalStorage = (nameItem, value) => localStorage
  .setItem(nameItem, JSON.stringify(value));

export const showRecipe = (id) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes && doneRecipes.find((element) => element.id === id)) {
    console.log(doneRecipes);
    return true;
    // DSR : ver esses retornos
  }
  return false;
};

export const includeDoneRecipe = ({ specificRecipe }) => {
  const date = Date();
  const food = {
    id: specificRecipe.idDrink || specificRecipe.idMeal,
    type: specificRecipe.idDrink ? 'drink' : 'meal',
    area: specificRecipe.strArea || '',
    category: specificRecipe.strCategory || '',
    alcoholicOrNot: specificRecipe.strAlchoholic || '',
    doneDate: date,
    name: specificRecipe.strDrink || specificRecipe.strMeal,
    image: specificRecipe.strDrinkThumbnail || specificRecipe.strMealThumbnail,
    tags: specificRecipe.strTags || '',
  };
  console.log('FOOD in includeDoneRecipe....: ', food);

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!doneRecipes) {
    return localStorage.setItem('doneRecipes', JSON.stringify([food]));
  }
  if (doneRecipes) {
    return false;
  }
};

  const [foods, setFoods] = useState([]);
  const [doneRecipes] = useLocalStorage('doneRecipes', []);
   console.log('DONE RECIPES.......: ', doneRecipes);
  useEffect(() => setFoods(doneRecipes), [doneRecipes]);

// Dealing with Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
