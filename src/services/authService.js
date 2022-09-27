import api from '../http/requests';
import axios from 'axios';
import { LOGIN_ROUTE, LOGOUT_ROUTE, REGISTRATION_ROUTE, CHECK_AUTH_ROUTE } from '../utils/consts';

export default class UserService {
  static async registration(email, phone = '', password, replPassword) {
    return await api.post(REGISTRATION_ROUTE, { email, phone, password, replPassword });
  }

  static async login(email, password) {
    return await api.post(LOGIN_ROUTE, { email, password });
  }

  static async logout() {
    return await api.post(LOGOUT_ROUTE);
  }

  static async checkAuth() {
    const response = await axios.get(CHECK_AUTH_ROUTE, { withCredentials: true });
    return response;
  }
}
