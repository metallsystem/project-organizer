import ProjectService from "../../services/projectSevice";
import { END_LOADING, START_LOADING } from "../actions/loading";
import { CREATE_PROJECT_ERROR, CREATE_PROJECT_SUCCESS, GET_ALL_PROJECTS_ERROR, GET_ALL_PROJECTS_SUCCESS, GET_ONE_PROJECT_ERROR, GET_ONE_PROJECT_SUCCESS } from "../actions/project";
import convertDate from "../../utils/convertDate";


export const getOne = (projectId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      const response = await ProjectService.getOne(projectId);

      dispatch({ type: GET_ONE_PROJECT_SUCCESS, payload: response.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      dispatch({ type: GET_ONE_PROJECT_ERROR, payload: response.data });
      dispatch({ type: END_LOADING });
    };
  };
};

export const getAll = (userId, limit, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      const response = await ProjectService.getAll(userId, limit, page);

      const projects = response.data.projects;

      projects.map(item => {
        item.createdAt = convertDate(item.createdAt);
        item.updatedAt = convertDate(item.updatedAt);
      });

      dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: response.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      dispatch({ type: GET_ALL_PROJECTS_ERROR, payload: error });
      dispatch({ type: END_LOADING });
    }
  };
};

export const createProject = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      const response = await ProjectService.createProject(formData);

      const projects = { ...response.data };

      projects.createdAt = convertDate(projects.createdAt);
      projects.updatedAt = convertDate(projects.updatedAt);

      dispatch({ type: CREATE_PROJECT_SUCCESS, payload: projects });
      dispatch({ type: END_LOADING });
    } catch (error) {
      dispatch({ type: CREATE_PROJECT_ERROR, payload: error.message });
      dispatch({ type: END_LOADING });
    }
  }
};
