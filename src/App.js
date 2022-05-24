import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
import Explore from './pages/Explore';
import Drinks from './pages/Drinks';
import InprogressFoods from './pages/InprogressFoods';
import Ingredients from './pages/Ingredients';
import Profile from './pages/Profile';
import Done from './pages/Done';
import Favorites from './pages/Favorites';
import Foods from './pages/Foods';
import FoodDetails from './pages/FoodDetails';
import DrinkDetails from './pages/DrinkDetails';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreNationalities from './pages/ExploreNationalities';
import NotFound from './pages/NotFound';
import InprogressDrinks from './pages/inprogressDrinks';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods/:id/in-progress" component={ InprogressFoods } />
        <Route exact path="/drinks/:id/in-progress" component={ InprogressDrinks } />
        <Route path="/foods/:id" component={ FoodDetails } />
        <Route path="/drinks/:id" component={ DrinkDetails } />
        <Route path="/foods" component={ Foods } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/explore/foods/ingredients" component={ Ingredients } />
        <Route path="/explore/drinks/ingredients" component={ Ingredients } />
        <Route path="/explore/foods/nationalities" component={ ExploreNationalities } />
        <Route path="/explore/drinks/nationalities" component={ NotFound } />
        <Route path="/explore/foods" component={ ExploreFoods } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route path="/explore" component={ Explore } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ Done } />
        <Route path="/favorite-recipes" component={ Favorites } />
      </Switch>
    </RecipesProvider>
  );
}
export default App;
