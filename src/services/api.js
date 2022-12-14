let url = '';
const checkFilter = (param, search, website) => {
  const cases = {
    ingredient: () => { url = `https://www.${website}.com/api/json/v1/1/filter.php?i=${search}`; },
    search: () => { url = `https://www.${website}.com/api/json/v1/1/search.php?s=${search}`; },
    firstLetter: () => { url = `https://www.${website}.com/api/json/v1/1/search.php?f=${search}`; },
    listCategories: () => { url = `https://www.${website}.com/api/json/v1/1/list.php?c=list`; },
    byCategory: () => { url = `https://www.${website}.com/api/json/v1/1/filter.php?c=${search}`; },
    byId: () => { url = `https://www.${website}.com/api/json/v1/1/lookup.php?i=${search}`; },
  };
  return cases[param]();
};

export const fetchApi = async (filter, search, website) => {
  checkFilter(filter, search, website);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const fetchRandomRecipe = async (isFood) => {
  const urlRandomRecipe = {
    '/foods': { res: 'https://www.themealdb.com/api/json/v1/1/random.php' },
    '/drinks': { res: 'https://www.thecocktaildb.com/api/json/v1/1/random.php' },
  };
  return fetch(urlRandomRecipe[isFood ? '/foods' : '/drinks'].res)
    .then((res) => res.json()).then((data) => data);
};

export const fetchMealByIngredient = async () => {
  const urlRecipeByIngredient = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = fetch(urlRecipeByIngredient);
  const { meals } = await (await response).json();
  return meals;
};

export const fetchDrinkByIngredient = async () => {
  const urlDrinkByIngredient = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const response = fetch(urlDrinkByIngredient);
  const { drinks } = await (await response).json();
  return drinks;
};
