import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CHECK_AUTH_SUCCES,
  CHECK_AUTH_ERROR
} from '../actions/auth'

const initialState = {
  user: {},
  isAuth: false,
  authWith: '',
  message: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, user: action.payload.user, authWith: action.payload.authWith, message: action.payload.message };
    case LOGIN_ERROR:
      return { ...state, message: action.payload };
    case REGISTRATION_SUCCESS:
      return { ...state, isAuth: true, user: action.payload.user, message: action.payload.message };
    case REGISTRATION_ERROR:
      return { ...state, message: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, isAuth: false, authWith: '', user: {}, message: action.payload };
    case LOGOUT_ERROR:
      return { ...state, message: action.payload };
    case CHECK_AUTH_SUCCES:
      return { ...state, isAuth: true, authWith: action.payload.authWith, user: action.payload.user, message: ''};
    case CHECK_AUTH_ERROR:
      return { ...state, message: action.payload};
    default:
      return state;
  }
};

export default authReducer;
