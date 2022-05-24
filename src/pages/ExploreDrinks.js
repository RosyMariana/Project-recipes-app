import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchRandomIgr } from '../services/ApiMeals';
import './Explore.css';

function ExploreFoods() {
  const history = useHistory();
  const [random, setRandom] = useState('');

  const byIngredient = 'By Ingredient';
  const surpriseMe = 'Surprise me!';

  const getIgrRandom = async () => {
    const data = await fetchRandomIgr('thecocktaildb');
    const randomId = data.drinks.map(({ idDrink }) => idDrink);
    setRandom(randomId[0]);
  };

  const handleClick = (value) => {
    if (value === byIngredient) history.push('/explore/drinks/ingredients');
    if (value === surpriseMe) history.push(`/drinks/${random}`);
  };

  useEffect(() => {
    getIgrRandom();
  }, []);

  return (
    <div>
      <Header title="Explore Drinks" />
      <div className="explore-drinks-container">
        <button
          className="explore-by-ingredient"
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => handleClick(byIngredient) }
        >
          By Ingredient

        </button>
        <button
          className="explore-surprise"
          data-testid="explore-surprise"
          type="button"
          onClick={ () => handleClick(surpriseMe) }
        >
          Surprise me!

        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
