import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardRecipesInprogress from '../components/CardRecipesInprogress';
import { getDetailsRecipes } from '../services/ApiMeals';

const seven = 7;
const twelve = 12;

function InprogressFoods({ history }) {
  const [detailsInprogress, setDetailsInprogress] = useState({});
  const [ingredientsInprogress, setIngredientsInprogress] = useState({});
  const [objDatasInprogress, setObjDatasInprogress] = useState({});
  const { pathname } = history.location;
  const id = pathname.substring(seven, twelve);

  const desconstructingFunc = (param) => {
    const { strMealThumb, strMeal, strCategory, strIngredient1, strIngredient2,
      strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
      strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
      strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17,
      strIngredient18, strIngredient19, strIngredient20, strInstructions, strYoutube,
      strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6,
      strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
      strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,
      strMeasure19, strMeasure20 } = param;

    const objIngMes = {
      ingredientsArray: [strIngredient1, strIngredient2,
        strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
        strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
        strIngredient13, strIngredient14, strIngredient15, strIngredient16,
        strIngredient17, strIngredient18, strIngredient19, strIngredient20],
      measureArray: [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
        strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11,
        strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16,
        strMeasure17, strMeasure18, strMeasure19, strMeasure20],
    };
    const categoryEnd = strCategory;

    const objParam = {
      instructions: { strInstructions },
      video: { strYoutube },
      image: { strMealThumb },
      id: { id },
      name: { strMeal },
      category: { categoryEnd },
      pathname: { pathname },
    };
    setIngredientsInprogress(objIngMes);
    setObjDatasInprogress(objParam);
  };

  const apiDetails = async () => {
    const data = await getDetailsRecipes('themealdb', id);
    setDetailsInprogress(data.meals[0]);
    console.log(data);
    console.log(id);
    desconstructingFunc(data.meals[0]);
  };

  useEffect(() => {
    apiDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('details: ', detailsInprogress);
  return (
    <div>
      <h1>Food in progress</h1>
      <CardRecipesInprogress
        objDatasInprogress={ objDatasInprogress }
        ingredientsInprogress={ ingredientsInprogress }
      />
    </div>
  );
}

InprogressFoods.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default InprogressFoods;
