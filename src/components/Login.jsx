import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ActionCreator } from '../reducer';

const validData = {
  username: 'qwerty123',
  password: 'qwerty123'
}

const checkAuth = async (user, password) => {
    const isValidUser = user === validData.username;
    const isValidPassword = password === validData.password;
    const isValid = isValidUser && isValidPassword;

    if (isValid) {
      return {data: {success: true}};
    } else {
      return {data: {success: false, errorMessage: 'Неверное имя пользователя или пароль'}};
    }
};

const Login = (props) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();


  const handleChangeUsername = event => {
    setUsernameValue(event.target.value)
  }
  const handleChangePassword = event => {
    setPasswordValue(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault();
    setError('');

    try {
      const res = await checkAuth(usernameValue, passwordValue);
      console.log('res', res);
      if (res.data.success) {
        dispatch(ActionCreator.login())
        props.history.push('/page');
      } else {
        setError(res.data.errorMessage)
      }
    } catch (error) {
      console.log(error);
      setError('Ошибка сервера')
    }
  };

  return (
    <div className="container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" onSubmit={handleSubmit}>

          {error ?
            <div className="alert alert-danger">
              {error}
            </div>
          : null}
        
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input 
              className="login__input form__input"
              type="text"
              name="username"
              placeholder="username"
              required
              autoComplete="off"
              value={usernameValue}
              onChange={handleChangeUsername}
            />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              className="login__input form__input"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={passwordValue}
              onChange={handleChangePassword}
            />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
