import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardRecipesInprogress from '../components/CardRecipesInprogress';
import { getDetailsRecipes } from '../services/ApiMeals';

const seven = 8;
const twelve = -12;

function InprogressDrinks({ history }) {
  const [detailsInprogress, setDetailsInprogress] = useState({});
  const [ingredientsInprogress, setIngredientsInprogress] = useState({});
  const [objDatasInprogress, setObjDatasInprogress] = useState({});
  const { pathname } = history.location;
  const id = pathname.slice(seven, twelve);

  const desconstructingFunc = (param) => {
    const { strDrinkThumb, strDrink, strCategory, strIngredient1, strIngredient2,
      strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
      strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
      strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17,
      strIngredient18, strIngredient19, strIngredient20, strInstructions, strYoutube,
      strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6,
      strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
      strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,
      strMeasure19, strMeasure20, strAlcoholic } = param;

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

    const categoryEnd = `${strCategory}: ${strAlcoholic}`;

    console.log(detailsInprogress);

    const objParam = {
      instructions: { strInstructions },
      video: { strYoutube },
      image: { strDrinkThumb },
      id: { id },
      name: { strDrink },
      category: { categoryEnd },
      pathname: { pathname },
    };
    setIngredientsInprogress(objIngMes);
    setObjDatasInprogress(objParam);
  };

  const apiDetails = async () => {
    const data = await getDetailsRecipes('thecocktaildb', id);
    console.log(data);
    console.log(id);
    setDetailsInprogress(data.drinks[0]);
    desconstructingFunc(data.drinks[0]);
  };

  useEffect(() => {
    apiDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Drinks in progress</h1>
      <CardRecipesInprogress
        objDatasInprogress={ objDatasInprogress }
        ingredientsInprogress={ ingredientsInprogress }
      />
    </div>
  );
}

InprogressDrinks.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default InprogressDrinks;
