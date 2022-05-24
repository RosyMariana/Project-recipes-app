import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import { getMealByIngridients } from '../services/ApiMeals';
import { getDrinksIngridientByName } from '../services/ApiDrinks';

function CardIngredients({ index, image, name, pathname }) {
  const { setFilter, setFilterDrinks, setDefaultIgr } = useContext(RecipesContext);
  const history = useHistory();

  const getFoodIgr = async () => {
    const data = await getMealByIngridients(name);
    setFilter(data.meals);
  };

  const getDrinkIgr = async () => {
    const data = await getDrinksIngridientByName(name);
    console.log(data.drinks);
    setFilterDrinks(data.drinks);
  };

  const handleClickIgr = () => {
    if (pathname === '/explore/foods/ingredients') {
      getFoodIgr();
      setDefaultIgr(name);
      history.push('/foods');
    } else if (pathname === '/explore/drinks/ingredients') {
      getDrinkIgr();
      setDefaultIgr(name);
      history.push('/drinks');
    }
  };

  return (
    <button type="button" onClick={ () => handleClickIgr() }>
      <div data-testid={ `${index}-ingredient-card` }>
        <img data-testid={ `${index}-card-img` } src={ image } alt="imagem" />
        <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
      </div>
    </button>
  );
}

CardIngredients.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardIngredients;
