import {
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_ERROR,
  GET_ONE_PROJECT_SUCCESS,
  GET_ONE_PROJECT_ERROR,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_ERROR,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_ERROR,
 } from "../actions/project";


const initialState = {
  projects: [],
  count: null
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload.projects, count: action.payload.count };
    case GET_ALL_PROJECTS_ERROR:
      return { ...state, ...action.payload };
    case GET_ONE_PROJECT_SUCCESS:
      return { ...state, projects: [ ...state.projects, action.payload ] };
    case GET_ONE_PROJECT_ERROR:
      return { ...state, message: action.payload };
    case CREATE_PROJECT_SUCCESS:
      return { ...state, projects: [ action.payload, ...state.projects ] };
    case CREATE_PROJECT_ERROR:
      return { ...state, message: action.payload };
    case DELETE_PROJECT_SUCCESS:
      return { ...state, message: action.payload };
    case DELETE_PROJECT_ERROR:
      return { ...state, message: action.payload };
    case UPDATE_PROJECT_SUCCESS:
      return { ...state, ...action.payload};
    case UPDATE_PROJECT_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  };
};

export default projectReducer;
