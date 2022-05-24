import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function CardDone({ index, name, image, id, type }) {
  const history = useHistory();
  const handleClickRecipes = () => {
    if (type === 'food') {
      console.log(id);
      return history.push(`/foods/${id}`);
    }
    if (type === 'drink') {
      return history.push(`/drinks/${id}`);
    }
  };
  return (
    <div>
      <button type="button" onClick={ () => handleClickRecipes() }>
        <img data-testid={ `${index}-horizontal-image` } src={ image } alt="imagem" />
        <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
      </button>
    </div>
  );
}

CardDone.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardDone;
