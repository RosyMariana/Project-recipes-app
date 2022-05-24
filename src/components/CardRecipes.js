import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './CardRecipes.css';

function CardRecipes({ index, name, image, pathname, id }) {
  const history = useHistory();
  const handleClickRecipes = () => {
    if (pathname === '/foods' || pathname === '/explore/foods/nationalities') {
      return history.push(`/foods/${id}`);
    }
    if (pathname === '/drinks') {
      return history.push(`/drinks/${id}`);
    }
  };
  return (
    <div className="card-recipes-div">
      <button
        type="button"
        onClick={ () => handleClickRecipes() }
        className="card-recipes-btn"
      >
        <img data-testid={ `${index}-card-img` } src={ image } alt="imagem" />
        <h3 data-testid={ `${index}-card-name` }>{name}</h3>
      </button>
    </div>
  );
}

CardRecipes.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardRecipes;
