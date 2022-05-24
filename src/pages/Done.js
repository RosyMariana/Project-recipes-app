import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardDone from '../components/CardDone';

const data = '23/06/2020';

const doneRecipes = [
  {
    id: '52771',
    type: 'food',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: data,
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: data,
    tags: [],
  },
];

const copy = require('clipboard-copy');

function Done() {
  const [doneRecipes2, setdoneRecipes] = useState([
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: data,
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: data,
      tags: [],
    },
  ]);

  const [teste, setTeste] = useState(false);
  const [teste2, setTeste2] = useState(false);
  useEffect(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  });

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

  function Chulambes(palavra) {
    if (palavra === 'food') {
      const teste50 = doneRecipes.filter((elemento) => (
        elemento.type === 'food' ? elemento : ''
      ));
      setdoneRecipes(teste50);
    } else
    if (palavra === 'drink') {
      const teste50 = doneRecipes.filter((elemento) => (
        elemento.type === 'drink' ? elemento : ''
      ));
      setdoneRecipes(teste50);
    } else {
      const teste50 = doneRecipes;
      setdoneRecipes(teste50);
    }
  }
  return (
    <div>
      <Header title="Done Recipes" />
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => Chulambes('all') }
        >
          {' '}
          All
          {' '}

        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => Chulambes('food') }
        >
          {' '}
          Food
          {' '}
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => Chulambes('drink') }
        >
          {' '}
          Drinks
          {' '}

        </button>
      </div>

      {doneRecipes2.map((elemento, index) => (
        <div key={ index }>
          <CardDone
            index={ index }
            image={ elemento.image }
            name={ elemento.name }
            type={ elemento.type }
            id={ elemento.id }
          />
          <p data-testid={ `${index}-horizontal-done-date` }>
            {`Done in: ${elemento.doneDate} `}
          </p>
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
            ? elemento.tags.map((tagName, cont) => (
              <div key={ cont }>
                <p data-testid={ `${index}-${tagName}-horizontal-tag` }>
                  {tagName}
                  {' '}
                </p>
              </div>))
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

export default Done;
