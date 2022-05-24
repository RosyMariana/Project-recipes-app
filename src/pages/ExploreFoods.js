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
  const byNationality = 'By Nationality';
  const surpriseMe = 'Surprise me!';

  const getIgrRandom = async () => {
    const data = await fetchRandomIgr('themealdb');
    const randomId = data.meals.map(({ idMeal }) => idMeal);
    setRandom(randomId[0]);
  };

  const handleClick = (value) => {
    if (value === byIngredient) history.push('/explore/foods/ingredients');
    if (value === byNationality) history.push('/explore/foods/nationalities');
    if (value === surpriseMe) history.push(`/foods/${random}`);
  };

  useEffect(() => {
    getIgrRandom();
  }, []);

  return (
    <div>
      <Header title="Explore Foods" />
      <div className="explore-foods-container">

        <button
          className="explore-by-ingredient"
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => handleClick(byIngredient) }
        >
          By Ingredient

        </button>
        <button
          className="explore-by-nationality"
          data-testid="explore-by-nationality"
          type="button"
          onClick={ () => handleClick(byNationality) }
        >
          By Nationality

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
