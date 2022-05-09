import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../services/localStorage';

export default function InProgressRecipes() {
  const [favorites, setFavorites] = useState({});
  const history = useHistory();
  useEffect(() => {
    if (getLocalStorage('inProgressRecipes') === null) {
      history.push('/');
    }
    setFavorites(getLocalStorage('inProgressRecipes'));
  }, [history]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <div>
      <h1>InProgressRecipes</h1>
    </div>
  );
}
