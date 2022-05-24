import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchListNationalities,
  getMealByName, fetchRecipesByNationality } from '../services/ApiMeals';
import CardRecipes from '../components/CardRecipes';

function ExploreNationalities({ history }) {
  const [nationalities, setNationalities] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [filterRecipe, setFilterRecipe] = useState();
  const [hasNationality, setHasNationality] = useState(false);
  const { pathname } = history.location;

  const twelve = 12;

  const getNationalities = async () => {
    const data = await fetchListNationalities();
    setNationalities(data.meals);
  };

  const getFood = async () => {
    const data = await getMealByName('');
    setRecipes(data.meals);
  };

  const filterByNationality = (value) => {
    if (value === 'All') {
      const resetFood = async () => {
        const data = await getMealByName('');
        setFilterRecipe(data.meals);
      };
      resetFood();
    } else {
      const getByNationality = async () => {
        const filterData = await fetchRecipesByNationality(value);
        setFilterRecipe(filterData.meals);
      };
      getByNationality();
      setHasNationality(true);
    }
  };

  useEffect(() => {
    getNationalities();
    getFood();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header search title="Explore Nationalities" />
      <div>
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ (event) => filterByNationality(event.target.value) }
        >
          <option data-testid="All-option">All</option>
          {nationalities.map((el, index) => (
            <option
              key={ index }
              data-testid={ `${el.strArea}-option` }
            >
              {el.strArea}

            </option>
          ))}
        </select>
      </div>
      { !hasNationality ? recipes && recipes.map((el, index) => index < twelve
      && (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <CardRecipes
            index={ index }
            image={ el.strMealThumb }
            name={ el.strMeal }
            pathname={ pathname }
            id={ el.idMeal }
          />
        </div>))
        : filterRecipe && filterRecipe.map((el, index) => index < twelve
        && (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <CardRecipes
              index={ index }
              image={ el.strMealThumb }
              name={ el.strMeal }
              pathname={ pathname }
              id={ el.idMeal }
            />
          </div>))}
      <Footer />
    </div>
  );
}

ExploreNationalities.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default ExploreNationalities;
