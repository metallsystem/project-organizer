import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CHECK_AUTH,
  CHECK_AUTH_SUCCES,
  CHECK_AUTH_ERROR
} from '../actions/auth';
import AuthService from '../../services/authService';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN });
      const response = await AuthService.login(email, password);

      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error,
      });
    };
  };
};

export const registration = (email, phone = '', password, replPassword) => {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTRATION });
      const response = await AuthService.registration(email, phone, password, replPassword);

      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: REGISTRATION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: error
      });
    };
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT })
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: LOGOUT_ERROR,
        payload: error
      });
    };
  };
};

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: CHECK_AUTH });
      const response = await AuthService.checkAuth();
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: CHECK_AUTH_SUCCES, payload: response.data });
    } catch (error) {
      dispatch({ type: CHECK_AUTH_ERROR, payload: error})
    }
  }
}
