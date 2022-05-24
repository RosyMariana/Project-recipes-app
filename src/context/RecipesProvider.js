import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [mealsToken, setMealsToken] = useState(null);
  const [cocktailsToken, setCocktailsToken] = useState(null);
  const [searchI, setSearchIcon] = useState(false);
  const [filter, setFilter] = useState([]);
  const [filterDrinks, setFilterDrinks] = useState([]);
  const [detailsCond, setDetailsCond] = useState(true);
  const [defaulIgr, setDefaultIgr] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [saveBool, setSaveBool] = useState(true);
  const [savedList, setSavedList] = useState({});

  const contextValue = {
    email,
    setEmail,
    passwordInput,
    setPasswordInput,
    mealsToken,
    setMealsToken,
    cocktailsToken,
    setCocktailsToken,
    searchI,
    setSearchIcon,
    filter,
    setFilter,
    filterDrinks,
    setFilterDrinks,
    detailsCond,
    setDetailsCond,
    defaulIgr,
    setDefaultIgr,
    favorites,
    setFavorites,
    saveBool,
    setSaveBool,
    savedList,
    setSavedList,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default RecipesProvider;
