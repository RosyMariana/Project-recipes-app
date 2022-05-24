import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import './Profile.css';

function Profile() {
  const { setEmail, setPasswordInput } = useContext(RecipesContext);
  const history = useHistory();

  const DoneRecipes = 'Done Recipes';
  const FavoriteRecipes = 'Favorite Recipes';
  const Logout = 'Logout';

  const emailUser = JSON.parse(localStorage.getItem('user'));

  const handleClick = (value) => {
    if (value === DoneRecipes) history.push('/done-recipes');
    if (value === FavoriteRecipes) history.push('/favorite-recipes');
    if (value === Logout) {
      setEmail('');
      setPasswordInput('');
      localStorage.clear();
      history.push('/');
    }
  };

  return (
    <div>
      <Header title="Profile" />
      <div className="profile-container">
        <span
          className="profile-email"
          data-testid="profile-email"
        >
          {`Email: ${emailUser?.email}`}

        </span>
        <div className="profile-container">
          <button
            className="profile-done-btn"
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => handleClick(DoneRecipes) }
          >
            Done Recipes

          </button>
          <button
            className="profile-favorite-btn"
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => handleClick(FavoriteRecipes) }
          >
            Favorite Recipes

          </button>
          <button
            className="profile-logout-btn"
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => handleClick(Logout) }
          >
            Logout

          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
