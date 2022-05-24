import React, { useEffect } from 'react';
import Ingredient from './Ingredient';

function CardRecipesInprogress(obj) {
  const { objDatasInprogress, ingredientsInprogress } = obj;
  console.log('1: ', objDatasInprogress);
  const { ingredientsArray } = ingredientsInprogress;
  console.log('2: ', ingredientsInprogress);
  const { instructions, image, name, category } = objDatasInprogress;
  console.log(name && name.strMeal);

  useEffect(() => {

  }, []);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ image && (image.strMealThumb || image.strDrinkThumb) }
        alt={ name && (name.strMeal || name.strDrink) }
      />
      <h2 data-testid="recipe-title">
        {name && (name.strMeal || name.strDrink)}
      </h2>
      <button data-testid="share-btn" type="button">
        Compartilhar
      </button>
      <button data-testid="favorite-btn" type="button">
        Favoritar
      </button>
      <p data-testid="recipe-category">{category && category.categoryEnd}</p>
      <ul>
        {ingredientsArray
          && ingredientsArray.map(
            (ing, index) => ing && <Ingredient
              ing={ ing }
              index={ index }
              key={ index }
              ingredientsInprogress={ ingredientsInprogress }
              objDatasInprogress={ objDatasInprogress }
            />,
          )}
      </ul>
      <p data-testid="instructions">
        {instructions && instructions.strInstructions}
      </p>
      <button type="button" data-testid="finish-recipe-btn">
        Finish Recipe
      </button>
    </div>
  );
}

export default CardRecipesInprogress;
