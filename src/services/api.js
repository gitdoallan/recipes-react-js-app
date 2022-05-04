let url = '';
const checkFilter = (param, search, website) => {
  const cases = {
    ingredient: () => { url = `https://www.${website}.com/api/json/v1/1/filter.php?i=${search}`; },
    search: () => { url = `https://www.${website}.com/api/json/v1/1/search.php?s=${search}`; },
    firstLetter: () => { url = `https://www.${website}.com/api/json/v1/1/search.php?f=${search}`; },
    listCategories: () => { url = `https://www.${website}.com/api/json/v1/1/list.php?c=list`; },
  };
  return cases[param]();
};

export const fetchApi = async (filter, search, website) => {
  checkFilter(filter, search, website);
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const fetchRandomRecipe = (isFood) => {
  const urlRandomRecipe = {
    '/foods': { res: 'https://www.themealdb.com/api/json/v1/1/random.php' },
    '/drinks': { res: 'https://www.thecocktaildb.com/api/json/v1/1/random.php' },
  };
  return fetch(urlRandomRecipe[isFood ? '/foods' : '/drinks'].res)
    .then((res) => res.json()).then((data) => data);
};
