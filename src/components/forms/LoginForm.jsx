import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { login } from "../../store/action-creators/user";

const LoginForm = () => {
  const clientId = '882325215005-3fu92vb15edg2tu29eil8ej6aa9b4sov.apps.googleusercontent.com';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuth } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profile, setProfile] = useState('');

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    console.log('success:', res);
    setProfile(res)
    console.log(profile.profileObj);
    dispatch()
  };

  const onFailure = (err) => {
      console.log('failed:', err);
  };

  const logOut = () => {
    setProfile(null);
  };

  useEffect(() => {

    if (isAuth) {
      navigate('/');
    }

  }, [navigate, isAuth]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail('');
    setPassword('');
  }

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
        onClick={loginHandler}
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
      <div className="form__item">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    </form>
  );
};

export default LoginForm;
