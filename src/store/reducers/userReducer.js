import { GET_USER } from "../actions/user";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload};
    default:
      return state;
  };
};

export default userReducer;
