import React, { useContext, useEffect } from 'react';
import './CardDetailsRecipes.css';
import RecipesContext from '../context/RecipesContext';
import StartRecipeBtn from './StartRecipeBtn';
import ShareBtn from './ShareBtn';
import FavoriteBtn from './FavoriteBtn';

const six = 6;
function CardDetailsRecipes(obj) {
  const { objDatas, ingredients, recomendation } = obj;
  const { ingredientsArray, measureArray } = ingredients;

  const { setSavedList, saveBool, savedList } = useContext(RecipesContext);
  const {
    instructions, image, name, id,
    categoryX, nationality, type, alcoholicOrNot, category, video } = objDatas;

  useEffect(() => {
    setSavedList({
      id,
      name,
      image,
      nationality,
      category,
      type,
      alcoholicOrNot,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objDatas]);

  return (
    <div className="bodyFake">
      <div className="imgs">
        <img
          data-testid="recipe-photo"
          src={ image }
          alt={ name }
        />
        <h2 data-testid="recipe-title">{ name }</h2>
      </div>
      <ShareBtn />
      <FavoriteBtn data={ id } />
      <p data-testid="recipe-category">{ categoryX }</p>
      <ul className="ingredients">
        {
          ingredientsArray
            && ingredientsArray.map((ing, index) => (
              ing
              && (
                <li
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ index }
                  className="ingredients-li"
                >
                  {measureArray[index] ? `${ing}: ${measureArray[index]}` : ing}
                </li>
              )))
        }
      </ul>
      <p data-testid="instructions" className="instructions">{ instructions }</p>
      <br />
      <div data-testid="video">{ video }</div>
      <div className="bodyFake2">
        <div className="recomendation">
          <div className="recomendation2">
            {recomendation
            && recomendation.map((each, i) => (
              i < six
              && (
                <div key={ i } className="card" data-testid={ `${i}-recomendation-card` }>
                  <img
                    src={ each.strDrinkThumb || each.strMealThumb }
                    alt={ each.strMeal || each.strDrink }
                  />
                  <p
                    data-testid={ `${i}-recomendation-title` }
                  >
                    { each.strMeal || each.strDrink }
                  </p>
                </div>)
            ))}
          </div>
        </div>
      </div>
      {saveBool
      && (
        <StartRecipeBtn savedList={ savedList } />
      )}
    </div>
  );
}

export default CardDetailsRecipes;
