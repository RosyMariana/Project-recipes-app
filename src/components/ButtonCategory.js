import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import {
  getCategory,
  getListCategory,
  getMealByName,
} from '../services/ApiMeals';
import { getDrinksByName } from '../services/ApiDrinks';
import RecipesContext from '../context/RecipesContext';

function ButtonCategory({ pathname }) {
  const { setFilter, setFilterDrinks, setDetailsCond } = useContext(RecipesContext);
  const [category, setCategory] = useState([]);
  const [isToggle, setIsToggle] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('');
  const five = 5;

  const renderCategory = async () => {
    if (pathname === '/foods') {
      const response = await getCategory('themealdb');
      setCategory(response.meals);
    }
    if (pathname === '/drinks') {
      const response = await getCategory('thecocktaildb');
      setCategory(response.drinks);
    }
  };

  const getList = async (value) => {
    if (pathname === '/foods') {
      const result = await getListCategory('themealdb', value);
      const result2 = await getMealByName('');
      if (isToggle) {
        setFilter(result2.meals);
      } else {
        setFilter(result.meals);
      }
    }
    if (pathname === '/drinks') {
      const result = await getListCategory('thecocktaildb', value);
      const result2 = await getDrinksByName('');
      if (isToggle) {
        setFilterDrinks(result2.drinks);
      } else {
        setFilterDrinks(result.drinks);
      }
    }
  };

  const handleClick = (index) => {
    if (category[index].strCategory !== selectedFilter) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
    setSelectedFilter(category[index].strCategory);
    setDetailsCond(false);
  };

  useEffect(() => {
    getList(selectedFilter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter, isToggle]);

  useEffect(() => {
    renderCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="category-filter-buttons">
      <button
        className="each-button-category"
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setIsToggle(true) }
      >
        All
      </button>
      {category.map(
        (el, index) => index < five && (
          <div key={ index }>
            <button
              className="each-button-category"
              data-testid={ `${el.strCategory}-category-filter` }
              type="button"
              value={ el.strCategory }
              onClick={ () => handleClick(index) }
            >
              {el.strCategory}
            </button>
          </div>
        ),
      )}
    </div>
  );
}

ButtonCategory.propTypes = {
  pathname: PropTypes.string,
}.isRequired;

export default ButtonCategory;
