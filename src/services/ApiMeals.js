export const getMealByIngridients = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getMealByName = async (name) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getMealByFirstLetter = async (firstLetter) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategory = async (apiName) => {
  try {
    const response = await fetch(
      `https://www.${apiName}.com/api/json/v1/1/list.php?c=list`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getListCategory = async (apiName, category) => {
  try {
    const response = await fetch(
      `https://www.${apiName}.com/api/json/v1/1/filter.php?c=${category}`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchRandomIgr = async (apiName) => {
  const response = await fetch(`https://www.${apiName}.com/api/json/v1/1/random.php`);
  const data = await response.json();
  return data;
};

export const fetchListNationalities = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecipesByNationality = async (nationality) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`);
  const data = await response.json();
  return data;
};

export const getDetailsRecipes = async (apiName, id) => {
  try {
    const response = await fetch(
      `https://www.${apiName}.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
