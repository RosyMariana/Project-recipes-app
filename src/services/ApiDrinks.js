// a primeira api não retorna as mesmas infos:
export const getDrinksIngridientByName = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDrinksByName = async (name) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDrinksByFirstLetter = async (firstLetter) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
