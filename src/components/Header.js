import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import SearchBar from './SearchBar';
import './Header.css';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ search, title }) {
  const history = useHistory();
  const {
    searchI,
    setSearchIcon,
  } = useContext(RecipesContext);

  const searchBar = () => {
    if (searchI) {
      setSearchIcon(false);
    } else {
      setSearchIcon(true);
    }
  };

  const profilePage = () => {
    history.push('/profile');
  };

  return (
    <div className="header-container">
      <header className="header">
        <input
          type="button"
          data-testid="profile-top-btn"
          className="profile-top-btn"
          src={ profileIcon }
          onClick={ profilePage }
        />
        <h2 data-testid="page-title">{ title }</h2>
        { search ? <input
          type="button"
          data-testid="search-top-btn"
          className="search-top-btn"
          src={ searchIcon }
          onClick={ searchBar }
        /> : null}
      </header>
      {searchI && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
  title: PropTypes.string,
}.isRequired;

export default Header;
