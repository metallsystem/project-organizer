import api from "../http/requests";
import {
  CREATE_PROJECT_ROUTE,
  DELETE_PROJECT_ROUTE,
  GET_ALL_PROJECTS_ROUTE,
  GET_ONE_PROJECT_ROUTE,
  UPDATE_PROJECT_ROUTE
} from "../utils/consts";


export default class ProjectService {
  static async getOne(projectId) {
    return await api.get(GET_ONE_PROJECT_ROUTE, { params: { projectId } });
  };

  static async getAll(userId, limit, page) {
    return await api.get(GET_ALL_PROJECTS_ROUTE, { params: { userId, limit, page } });
  };

  static async createProject(formData) {
    return await api.post(CREATE_PROJECT_ROUTE, formData, {headers: {'Content-Type': 'multipart/form-data'}});
  };

  static async updateProject(name, privacy, members = []) {
    return await api.patch(UPDATE_PROJECT_ROUTE, { name, privacy, members });
  };

  static async deleteProject(projectId) {
    return await api.delete(DELETE_PROJECT_ROUTE, { params: { projectId } });
  };
};
