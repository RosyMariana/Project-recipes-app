import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardDone from '../components/CardDone';

const copy = require('clipboard-copy');

function Favoites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filter, setFilter] = useState([]);
  const [resultsArray, setResultsArray] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes')),
  );

  const [teste, setTeste] = useState(false);
  const [teste2, setTeste2] = useState(false);
  useEffect(() => {
    const teste5000 = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteRecipes(teste5000);
  }, []);

  useEffect(() => {
    if (filter.length > 0) {
      setResultsArray(filter);
    } else {
      setResultsArray(favoriteRecipes);
    }
  }, [filter, favoriteRecipes, resultsArray]);

  function funcCompartilhar(elemento) {
    const endPoint = `http://localhost:3000/foods/${elemento.id}`;
    // navigator.clipboard.writeText(endPoint);
    copy(endPoint);
    if (elemento.type === 'food') {
      setTeste(true);
    } else {
      setTeste2(true);
    }
  }

  function desfavoritar(elemento) {
    const finalResult = favoriteRecipes.filter((each) => each.id !== elemento.id);
    setFavoriteRecipes(finalResult);
  }

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  function Listar(palavra) {
    if (palavra === 'food') {
      const teste50 = favoriteRecipes.filter((elemento) => (
        elemento.type === 'food' ? elemento : ''
      ));
      setFilter(teste50);
    } else
    if (palavra === 'drink') {
      const teste50 = favoriteRecipes.filter((elemento) => (
        elemento.type === 'drink' ? elemento : ''
      ));
      setFilter(teste50);
    } else {
      setFilter(favoriteRecipes);
    }
  }
  return (
    <div>
      <Header title="Favorite Recipes" />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => Listar('all') }
        >
          {' '}
          All
          {' '}

        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => Listar('food') }
        >
          {' '}
          Food
          {' '}
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => Listar('drink') }
        >
          {' '}
          Drinks
          {' '}

        </button>
      </div>

      {resultsArray.map((elemento, index) => (
        <div key={ index }>
          <CardDone
            index={ index }
            image={ elemento.image }
            name={ elemento.name }
            type={ elemento.type }
            id={ elemento.id }
          />
          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }
            src="src/images/shareIcon.svg"
            onClick={ () => ((funcCompartilhar(elemento))) }
          >
            {' '}
            Compartilhar
            {' '}
          </button>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
            src="src/images/blackHeartIcon.svg"
            onClick={ () => ((desfavoritar(elemento))) }
          >
            {' '}
            Desfavoritar
            {' '}

          </button>
          {elemento.type === 'food'
            ? (
              <div>

                {teste === true ? (
                  <div>
                    <p>Link copied!</p>
                  </div>) : ''}
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {`${elemento.nationality} - ${elemento.category}`}

                </p>
                {' '}

              </div>) : ''}
          {elemento.type === 'food'
            ? (
              <div>
                {elemento.category}
                {' '}
                {elemento.nationality}
              </div>)
            : (
              <div>
                {teste2 === true ? (
                  <div>
                    <p>Link copied!</p>
                  </div>) : ''}
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {elemento.alcoholicOrNot}
                </p>
              </div>
            )}
        </div>))}

    </div>
  );
}

export default Favoites;
