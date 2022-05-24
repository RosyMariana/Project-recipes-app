import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import './Login.css';

const paramEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
const six = 6;

function Login(props) {
  const {
    email,
    setEmail,
    passwordInput,
    setPasswordInput,
    setMealsToken,
    setCocktailsToken,
  } = useContext(RecipesContext);

  const submitBtn = () => {
    const { history } = props;
    setMealsToken(1);
    setCocktailsToken(1);
    history.push('/foods');
  };

  const disableButton = () => passwordInput.length > six && paramEmail.test(email.email);

  const handleEmail = ({ target: { value } }) => {
    setEmail({ email: value });
  };

  const handlePassword = ({ target: { value } }) => {
    setPasswordInput(value);
  };

  return (
    <div className="Login-container">
      <h1 className="title-login">Login</h1>
      <form className="form-login">
        <input
          className="input-login"
          type="text"
          placeholder="Digite seu e-mail"
          data-testid="email-input"
          onChange={ handleEmail }
        />
        <input
          className="input-login"
          type="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
          value={ passwordInput }
          onChange={ handlePassword }
        />
        <button
          className="button-login"
          disabled={ !disableButton() }
          type="button"
          data-testid="login-submit-btn"
          onClick={ () => submitBtn() }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
