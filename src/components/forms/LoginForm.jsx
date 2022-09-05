import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='form'>
      <FormInput
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email"
        id="email"
        required
        text="Email"
      />

      <FormInput
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        id="password"
        required
        text="Пароль"
      />

      <FormButton
        onClick={e => {
          e.preventDefault();
        }}
        type="submit"
        text="Войти"
      />
      <div className="form__item">
        <Link
          className="form__link"
          to="/registration"
        >
          Зарегистрироватся
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
