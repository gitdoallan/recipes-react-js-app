import React from 'react';
import { Link } from 'react-router-dom';
import useImage from '../services/useImage';

export default function Footer() {
  const drinkIconImg = useImage('drinkIcon');
  const exploreIconImg = useImage('exploreIcon');
  const mealIconImg = useImage('mealIcon');

  return (
    <footer data-testid="footer" className="footer">
      <div className="footer-imgs">
        <Link to="/drinks">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIconImg.image }
            alt="Drinks Icon"
          />
        </Link>

        <Link to="/explore">
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIconImg.image }
            alt="Explore Icon"
          />
        </Link>
        <Link to="/foods">
          <img
            data-testid="food-bottom-btn"
            src={ mealIconImg.image }
            alt="Meal Icon"
          />
        </Link>
      </div>
    </footer>);
}
