import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRecipes from '../components/CardRecipes';
import RecipesContext from '../context/RecipesContext';
import { getMealByName } from '../services/ApiMeals';
import ButtonCategory from '../components/ButtonCategory';
import './foods.css';

function Foods({ history }) {
  const {
    email,
    mealsToken,
    cocktailsToken, filter, setFilter, detailsCond } = useContext(RecipesContext);
  const twelve = 12;
  const { pathname } = history.location;

  useEffect(() => {
    const getFood = async () => {
      const data = await getMealByName('');
      setFilter(data.meals);
    };
    getFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('mealsToken', mealsToken);
    localStorage.setItem('cocktailsToken', cocktailsToken);
    localStorage.setItem('user', JSON.stringify(email));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header search title="Foods" />
      <ButtonCategory pathname={ pathname } />
      {filter === null
        ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
        : filter.map(
          (el, index) => index < twelve
              && (filter.length === 1 && detailsCond ? (
                <Redirect to={ `/foods/${el.idMeal}` } />
              ) : (
                <div
                  key={ index }
                  data-testid={ `${index}-recipe-card` }
                >
                  <CardRecipes
                    index={ index }
                    image={ el.strMealThumb }
                    name={ el.strMeal }
                    pathname={ pathname }
                    id={ el.idMeal }
                  />
                </div>
              )),
        )}
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default Foods;
