import React, { useState, useContext, useEffect } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipesContext from '../context/RecipesContext';

function FavoriteBtn(data) {
  const [favBool, setFavBool] = useState(true);
  const [srcIcon, setSrcIcon] = useState(whiteHeartIcon);

  const { favorites, setFavorites, savedList } = useContext(RecipesContext);

  useEffect(() => {
    const getting = localStorage.getItem('favoriteRecipes');
    let result = [];
    if (!getting) {
      result = [];
    } else {
      result = JSON.parse(getting);
    }
    setFavorites(result);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentRecipe = favorites.find((each) => each.id === Object.values(data)[0]);
    if (!currentRecipe) {
      setFavBool(true);
    } else {
      setFavBool(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  const handleSrc = () => {
    if (!favBool) {
      setSrcIcon(blackHeartIcon);
    } else {
      setSrcIcon(whiteHeartIcon);
    }
  };

  const handleFavClick = () => {
    if (favBool) {
      setFavBool(false);
      setFavorites([...favorites, savedList]);
    } else {
      const getting = localStorage.getItem('favoriteRecipes');
      const result = JSON.parse(getting);
      const finalResult = result.filter((each) => each.id !== Object.values(data)[0]);
      setFavBool(true);
      setFavorites(finalResult);
    }
  };
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [savedList, favorites]);

  useEffect(() => {
    handleSrc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favBool]);

  return (
    <input
      data-testid="favorite-btn"
      type="button"
      src={ srcIcon }
      className={ favBool ? 'fav-btn-white' : 'fav-btn-black' }
      onClick={ handleFavClick }
      id="fav-btn"
    />
  );
}

export default FavoriteBtn;
