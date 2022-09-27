import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { GOOGLE_CLIENT_ID } from "../../utils/consts";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../../store/actions/auth";

const LoginWithGoogle = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: GOOGLE_CLIENT_ID,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    const user = res.profileObj;
    dispatch({ type: LOGIN_SUCCESS, payload: {user, authWith: 'google', message: 'Ви увішли в ситему'}});
  };

  const onFailure = (error) => {
      dispatch({ type: LOGIN_ERROR, payload: error.error})
  };

  return (
    <div className="form__item">
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Увійти за допомогою Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginWithGoogle;
