import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDetailsRecipes } from '../services/ApiMeals';
import { getDrinksByName } from '../services/ApiDrinks';
import CardDetailsRecipes from '../components/CardDetailsRecipes';
import '../components/CardDetailsRecipes.css';

const seven = 7;

function FoodDetails({ history }) {
  const [details, setDetails] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [objDatas, setObjDatas] = useState({});
  const [recomendation, setRecomendation] = useState([]);

  const { pathname } = history.location;
  const id = pathname.substring(seven);

  const apiDetails = async () => {
    const data = await getDetailsRecipes('themealdb', id);
    setDetails(data.meals[0]);
  };

  const desconstructingFunc = () => {
    const { strMealThumb, strMeal, strCategory, strIngredient1, strIngredient2,
      strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
      strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
      strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17,
      strIngredient18, strIngredient19, strIngredient20, strInstructions, strYoutube,
      strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6,
      strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12,
      strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,
      strMeasure19, strMeasure20, strArea } = details;

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
      instructions: strInstructions,
      video: strYoutube,
      image: strMealThumb,
      id,
      name: strMeal,
      categoryX: categoryEnd,
      nationality: strArea,
      category: strCategory,
      type: 'food',
      alcoholicOrNot: '',
    };
    setIngredients(objIngMes);
    setObjDatas(objParam);
  };

  const getRecomendation = async () => {
    const data = await getDrinksByName('');
    setRecomendation(data.drinks);
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
      <h1 className="foods-details">Food Details</h1>
      <CardDetailsRecipes
        objDatas={ objDatas }
        ingredients={ ingredients }
        pathname={ pathname }
        recomendation={ recomendation }
      />
    </div>
  );
}

FoodDetails.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }),
}.isRequired;

export default FoodDetails;
