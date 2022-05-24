import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Explore.css';

function Explore() {
  const history = useHistory();
  const ExploreFoods = 'Explore Foods';
  const ExploreDrinks = 'Explore Drinks';

  const handleClick = (value) => {
    if (value === ExploreFoods) history.push('/explore/foods');
    if (value === ExploreDrinks) history.push('/explore/drinks');
  };

  return (
    <div>
      <Header title="Explore" />
      <div className="explore-container">
        <button
          className="btn-explore-foods"
          data-testid="explore-foods"
          type="button"
          onClick={ () => handleClick(ExploreFoods) }
        >
          Explore Foods

        </button>
        <button
          className="btn-explore-drinks"
          data-testid="explore-drinks"
          type="button"
          onClick={ () => handleClick(ExploreDrinks) }
        >
          Explore Drinks

        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
