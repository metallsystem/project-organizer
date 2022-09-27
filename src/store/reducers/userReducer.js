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
} from '../actions/auth'

const initialState = {
  user: {},
  isAuth: false,
  authWith: '',
  loading: false,
  message: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuth: true, user: action.payload.user, authWith: action.payload.authWith, message: action.payload.message };
    case LOGIN_ERROR:
      return { ...state, loading: false, message: action.payload };
    case REGISTRATION:
      return { ...state, loading: true, isAuth: true, user: action.payload };
    case REGISTRATION_SUCCESS:
      return { ...state, loading: false, user: action.payload.user, message: action.payload.message };
    case REGISTRATION_ERROR:
      return { ...state, loading: false, message: action.payload };
    case LOGOUT:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return { ...state, loading: false, isAuth: false, authWith: '', user: {}, message: action.payload };
    case LOGOUT_ERROR:
      return { ...state, loading: false, message: action.payload };
    case CHECK_AUTH:
      return { ...state, loading: true };
    case CHECK_AUTH_SUCCES:
      return { ...state, loading: false, isAuth: true, authWith: action.payload.authWith, user: action.payload.user, message: ''};
    case CHECK_AUTH_ERROR:
      return { ...state, loading: false, message: action.payload};
    default:
      return state;
  }
};

export default authReducer;
