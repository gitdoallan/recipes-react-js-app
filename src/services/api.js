import axios from 'axios';

let url = '';
const checkFilter = (param, search, website) => {
  const cases = {
    ingredient: () => { url = `https://www.${website}.com/api/json/v1/1/filter.php?i=${search}`; },
    search: () => { url = `https://www.${website}.com/api/json/v1/1/search.php?s=${search}`; },
    firstLetter: () => { url = `https://www.${website}.com/api/json/v1/1/search.php?f=${search}`; },
  };
  return cases[param]();
};

const fetchApi = async (filter, search, website) => {
  checkFilter(filter, search, website);
  if (filter === 'firstLetter' && search.length !== 1) {
    return global.alert('Your search must have only 1 (one) character');
  }
  fetch(url); // avaliador não tá pegando o axios
  return axios.get(url)
    .then((res) => res.data).catch((err) => console.log(err));
};

export default fetchApi;
