import { END_LOADING, START_LOADING } from "../actions/loading";


const initialState = {
  isLoading: false,
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;
