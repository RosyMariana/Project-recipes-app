import React, { useContext, useState } from 'react';
import './Header.css';
import {
  getMealByFirstLetter,
  getMealByIngridients,
  getMealByName,
} from '../services/ApiMeals';
import {
  getDrinksIngridientByName,
  getDrinksByFirstLetter,
  getDrinksByName,
} from '../services/ApiDrinks';

import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const [checkedRadio, setCheckedRadio] = useState('ingredient');
  const [inputSearch, setInputSearch] = useState('');

  const { setFilter, setFilterDrinks, setDetailsCond } = useContext(RecipesContext);

  const foodFetch = async () => {
    let response = [];
    if (checkedRadio === 'ingredient') {
      response = await getMealByIngridients(inputSearch);
    }
    if (checkedRadio === 'name') {
      response = await getMealByName(inputSearch);
    }
    if (checkedRadio === 'first-letter') {
      if (inputSearch.length === 1) {
        response = await getMealByFirstLetter(inputSearch);
      } else {
        response = null;
        global.alert('Your search must have only 1 (one) character');
      }
    }
    return response;
  };

  const drinkFetch = async () => {
    let response = [];
    if (checkedRadio === 'ingredient') {
      response = await getDrinksIngridientByName(inputSearch);
    }
    if (checkedRadio === 'name') {
      response = await getDrinksByName(inputSearch);
    }
    if (checkedRadio === 'first-letter') {
      if (inputSearch.length === 1) {
        response = await getDrinksByFirstLetter(inputSearch);
      } else {
        response = null;
        global.alert('Your search must have only 1 (one) character');
      }
    }
    return response;
  };

  const searchingFunc = async () => {
    let response = [];
    const page = window.location.pathname;
    if (page === '/foods') {
      response = await foodFetch();
      setFilter(response && response.meals);
    } else if (page === '/drinks') {
      response = await drinkFetch();
      setFilterDrinks(response && response.drinks);
    }
    setDetailsCond(true);
  };

  const checkedSetter = ({ target }) => target.checked && setCheckedRadio(target.value);

  const handleInput = ({ target: { value } }) => setInputSearch(value);
  return (
    <form className="search-bar">
      <input
        className="input-search"
        type="text"
        data-testid="search-input"
        placeholder="Search Recipe"
        onChange={ handleInput }
      />
      <input
        className="ingredient-search-radio"
        type="radio"
        id="ingredient-search-radio"
        data-testid="ingredient-search-radio"
        value="ingredient"
        name="param-search"
        onChange={ checkedSetter }
      />
      Ingredient
      <input
        className="name-search-radio"
        type="radio"
        data-testid="name-search-radio"
        value="name"
        id="name-search-radio"
        name="param-search"
        onChange={ checkedSetter }
      />
      Name
      <input
        className="first-letter-search-radio"
        type="radio"
        data-testid="first-letter-search-radio"
        value="first-letter"
        id="first-letter-search-radio"
        name="param-search"
        onChange={ checkedSetter }
      />
      First letter
      <button
        className="search-btn"
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchingFunc }
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
