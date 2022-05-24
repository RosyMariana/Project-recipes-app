import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDetailsRecipes, getMealByName } from '../services/ApiMeals';
import CardDetailsRecipes from '../components/CardDetailsRecipes';

const eigth = 8;

function DrinkDetails({ history }) {
  const [details, setDetails] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [objDatas, setObjDatas] = useState({});
  const [recomendation, setRecomendation] = useState([]);

  const { pathname } = history.location;
  const id = pathname.substring(eigth);

  const apiDetails = async () => {
    const data = await getDetailsRecipes('thecocktaildb', id);
    console.log('id: ', id);
    setDetails(data.drinks[0]);
  };

  const desconstructingFunc = () => {
    const { strDrinkThumb, strDrink, strCategory, strIngredient1, strIngredient2,
      strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
      strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
      strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17,
      strIngredient18, strIngredient19, strIngredient20, strInstructions, strYoutube,
      strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6,
      strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
      strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,
      strMeasure19, strMeasure20, strAlcoholic, strArea } = details;

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

    const objParam = {
      instructions: strInstructions,
      video: strYoutube,
      image: strDrinkThumb,
      id,
      name: strDrink,
      categoryX: categoryEnd,
      nationality: strArea || '',
      category: strCategory,
      type: 'drink',
      alcoholicOrNot: strAlcoholic,
    };
    setIngredients(objIngMes);
    setObjDatas(objParam);
  };

  const getRecomendation = async () => {
    const data = await getMealByName('');
    setRecomendation(data.meals);
  };

  useEffect(() => {
    apiDetails();
    getRecomendation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    desconstructingFunc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details]);

  return (
    <div>
      <h1>Drinks Details</h1>
      <CardDetailsRecipes
        objDatas={ objDatas }
        ingredients={ ingredients }
        pathname={ pathname }
        recomendation={ recomendation }
      />
    </div>
  );
}

DrinkDetails.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default DrinkDetails;
