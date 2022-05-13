import React from 'react';
import { Link } from 'react-router-dom';
import drinkIconImg from '../images/drinkIcon.svg';
import exploreIconImg from '../images/exploreIcon.svg';
import mealIconImg from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <div className="footer-imgs">
        <Link to="/drinks">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIconImg }
            alt="Drinks Icon"
          />
        </Link>

        <Link to="/explore">
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIconImg }
            alt="Explore Icon"
          />
        </Link>
        <Link to="/foods">
          <img
            data-testid="food-bottom-btn"
            src={ mealIconImg }
            alt="Meal Icon"
          />
        </Link>
      </div>
    </footer>);
}
