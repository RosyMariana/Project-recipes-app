import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function StartRecipeBtn({ savedList: id }) {
  const { setSaveBool } = useContext(RecipesContext);
  const history = useHistory();

  const handleSaveClick = () => {
    setSaveBool(false);
    history.push(`/${id.type}s/${id.id}/in-progress`);
  };

  return (
    <button
      type="button"
      className="btn-start"
      data-testid="start-recipe-btn"
      onClick={ handleSaveClick }
    >
      Start Recipe
    </button>);
}

StartRecipeBtn.propTypes = {
  savedList: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
  }),
  type: PropTypes.string,
}.isRequired;

export default StartRecipeBtn;
