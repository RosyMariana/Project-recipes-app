import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRecipes from '../components/CardRecipes';
import RecipesContext from '../context/RecipesContext';
import { getDrinksByName } from '../services/ApiDrinks';
import ButtonCategory from '../components/ButtonCategory';

function Drinks({ history }) {
  const { filterDrinks, setFilterDrinks, detailsCond } = useContext(RecipesContext);
  const twelve = 12;
  const { pathname } = history.location;

  useEffect(() => {
    const getDrink = async () => {
      const data = await getDrinksByName('');
      setFilterDrinks(data.drinks);
    };
    getDrink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header search title="Drinks" />
      <ButtonCategory pathname={ pathname } />
      {filterDrinks === null
        ? global.alert('Sorry, we haven\'t found any recipes for these filters.')
        : filterDrinks.map(
          (el, index) => index < twelve
              && (filterDrinks.length === 1 && detailsCond ? (
                <Redirect to={ `/drinks/${el.idDrink}` } />
              ) : (
                <div key={ index } data-testid={ `${index}-recipe-card` }>
                  <CardRecipes
                    index={ index }
                    image={ el.strDrinkThumb }
                    name={ el.strDrink }
                    pathname={ pathname }
                    id={ el.idDrink }
                  />
                </div>
              )),
        )}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  pathname: PropTypes.string,
}.isRequired;

export default Drinks;
