import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../../store/action-creators/auth";
import FormButton from "../UI/FormButton";
import FormInput from "../UI/FormInput";

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [replPassword, setReplPassword] = useState('');

  const { isAuth } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if (isAuth) {
      navigate('/');
    }

  }, [navigate, isAuth]);

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(registration(email, phone, password, replPassword));
    setEmail('');
    setPhone('');
    setPassword('');
    setReplPassword('');
  }


  return (
    <form className='form'>
      <FormInput
        onChange={e => setEmail(e.target.value)}
        value={email}
        type="email"
        id="email"
        required
        text="Електронна пошта"
      />

      <FormInput
        onChange={e => setPhone(e.target.value)}
        value={phone}
        type="tel"
        id="phone"
        text="Телефон"
      />

      <FormInput
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        id="password"
        required
        text="Пароль"
      />

      <FormInput
        onChange={e => setReplPassword(e.target.value)}
        value={replPassword}
        type="password"
        id="repl-password"
        required
        text="Підтвердіть пароль"
      />

      <FormButton
        onClick={registerHandler}
        type="submit"
        text="Зареєструватись"
      />
    </form>
  );
};

export default RegistrationForm;
