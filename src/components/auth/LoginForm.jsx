import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FormButton from "../UI/FormButton";
import FormInput from "../UI/FormInput";
import { login } from "../../store/action-creators/auth";
import LoginWithGoogle from "./LoginWithGoogle";

const LoginForm = () => {

  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(loginData.email, loginData.password));
    setLoginData({ email: '', password: '' })
  }

  return (
    <form className='form'>
      <FormInput
        onChange={e => setLoginData({...loginData, email: e.target.value})}
        value={loginData.email}
        type="email"
        id="email"
        required
        text="Електронна пошта"
      />

      <FormInput
        onChange={e => setLoginData({...loginData, password: e.target.value})}
        value={loginData.password}
        type="password"
        id="password"
        required
        text="Пароль"
      />

      <FormButton
        onClick={loginHandler}
        type="submit"
        text="Увійти"
      />
      <div className="form__item">
        <Link
          className="form__link"
          to="/registration"
        >
          Зареєструватись
        </Link>
      </div>
      <LoginWithGoogle/>
    </form>
  );
};

export default LoginForm;
