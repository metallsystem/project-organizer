import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CHECK_AUTH_SUCCES,
  CHECK_AUTH_ERROR
} from '../actions/auth';
import AuthService from '../../services/authService';
import { END_LOADING, START_LOADING } from '../actions/loading';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const response = await AuthService.login(email, password);

      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error });
      dispatch({ type: END_LOADING });
    };
  };
};

export const registration = (email, phone = '', password, replPassword) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const response = await AuthService.registration(email, phone, password, replPassword);

      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: REGISTRATION_SUCCESS, payload: response.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: error
      });
      dispatch({ type: END_LOADING });
    };
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      dispatch({
        type: LOGOUT_ERROR,
        payload: error
      });
      dispatch({ type: END_LOADING });
    };
  };
};

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const response = await AuthService.checkAuth();
      localStorage.setItem('token', response.data.accessToken);
      dispatch({ type: CHECK_AUTH_SUCCES, payload: response.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      dispatch({ type: CHECK_AUTH_ERROR, payload: error});
      dispatch({ type: END_LOADING });
    }
  }
}
