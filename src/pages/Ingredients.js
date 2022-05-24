import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardIngredients from '../components/CardIngredients';

function Ingredients({ history }) {
  const [ingredient, setIngredient] = useState([]);
  const Food = 'themealdb';
  const DrinkApi = 'thecocktaildb';
  const twelve = 12;
  const { pathname } = history.location;

  const getIngredients = async (apiName) => {
    const response = await fetch(
      `https://www.${apiName}.com/api/json/v1/1/list.php?i=list`,
    );
    const data = await response.json();
    return data;
  };

  const changeIngredients = async () => {
    const dataFood = await getIngredients(Food);
    const dataDrink = await getIngredients(DrinkApi);
    if (pathname === '/explore/foods/ingredients') {
      setIngredient(dataFood.meals);
    } else if (pathname === '/explore/drinks/ingredients') {
      setIngredient(dataDrink.drinks);
    }
  };

  useEffect(() => {
    changeIngredients();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <div>
        {ingredient && ingredient.map((el, index) => (index < twelve
          && (
            pathname === '/explore/foods/ingredients'
              ? (
                <div key={ index }>
                  <CardIngredients
                    index={ index }
                    image={ `https://www.${Food}.com/images/ingredients/${el.strIngredient}-Small.png` }
                    name={ el.strIngredient }
                    pathname={ pathname }
                  />
                </div>)
              : (
                <div key={ index }>
                  <CardIngredients
                    index={ index }
                    image={ `https://www.${DrinkApi}.com/images/ingredients/${el.strIngredient1}-Small.png` }
                    name={ el.strIngredient1 }
                    pathname={ pathname }
                  />
                </div>)
          )
        ))}
      </div>
      <Footer />
    </div>
  );
}

Ingredients.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default Ingredients;
