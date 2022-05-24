import React, { useEffect, useState } from 'react';
import './Ingredient.css';

function Ingredient(obj) {
  const { ingredientsInprogress, ing, index, objDatasInprogress } = obj;
  const { ingredientsArray, measureArray } = ingredientsInprogress;
  const { pathname, id } = objDatasInprogress;

  const [isChecked, setIsChecked] = useState(false);
  const [isClassName, setIsClassName] = useState('checkedNotMarked');

  const handleChecked = () => {
    if (isChecked === true) {
      setIsClassName('checkedMarked');
    }
    if (isChecked === false) {
      setIsClassName('checkedNotMarked');
    }
  };

  const handleIf = (localTest, inProgressRecipes) => {
    if (!localTest) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
  };

  const handleLocal = () => {
    const inProgressRecipes = {
      cocktails: {},
      meals: {},
    };
    console.log(pathname);
    if (pathname.pathname === `/foods/${id.id}/in-progress`) {
      inProgressRecipes.meals = { [id.id]:
       [ingredientsArray[index]] };
      const localTest = localStorage.getItem('inProgressRecipes');

      if (!localTest) {
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
      }

      const resultado = JSON.parse(localTest);
      inProgressRecipes.meals = { ...resultado.meals,
        [id.id]: [
          ...resultado.meals[id.id] || [], ingredientsArray[index]] };
      console.log(inProgressRecipes.meals);
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    } else if (pathname.pathname === `/drinks/${id.id}/in-progress`) {
      inProgressRecipes.cocktails = { [id.id]:
        [ingredientsArray[index]] };
      const localTest = localStorage.getItem('inProgressRecipes');
      handleIf(localTest, inProgressRecipes);

      const resultado = JSON.parse(localTest);
      inProgressRecipes.cocktails = { ...resultado.cocktails,
        [id.id]: [
          ...resultado.cocktails[id.id] || [], ingredientsArray[index]] };
      console.log(inProgressRecipes.cocktails);
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
  };

  const handleClickChecked = (checked) => {
    handleChecked();
    setIsChecked(checked);
    handleLocal();

    console.log(checked);
  };

  useEffect(() => {
    handleChecked();
  }, [isChecked]);

  return (
    <li data-testid={ `${index}-ingredient-step` } className={ isClassName }>
      {measureArray[index] ? `${ing}: ${measureArray[index]}` : ing}
      <input
        type="checkbox"
        id={ index }
        checked={ isChecked }
        onChange={ ({ target: { checked } }) => handleClickChecked(checked) }
      />
    </li>
  );
}

export default Ingredient;
