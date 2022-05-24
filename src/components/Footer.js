import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const history = useHistory();
  function submitTeste() {
    history.push('/drinks');
  }
  function submitTeste2() {
    history.push('/explore');
  }
  function submitTeste3() {
    history.push('/foods');
  }
  return (
    <div className="container-footer">
      <footer data-testid="footer" className="footer">
        <input
          data-testid="drinks-bottom-btn"
          className="drinks-bottom-btn"
          type="button"
          src={ drinkIcon }
          onClick={ () => submitTeste() }
        />
        <input
          data-testid="explore-bottom-btn"
          className="explore-bottom-btn"
          type="button"
          src={ exploreIcon }
          onClick={ () => submitTeste2() }
        />
        <input
          data-testid="food-bottom-btn"
          className="food-bottom-btn"
          type="button"
          src={ mealIcon }
          onClick={ () => submitTeste3() }
        />
      </footer>
    </div>
  );
}

export default Footer;
