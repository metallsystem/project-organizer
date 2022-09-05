import api from '../http/requests';

export default class UserService {
  static async registration(email, phone = '', password, replPassword){
    return await api.post('/api/user/registration', { email, phone, password, replPassword });
  }

  static async login(email, password){
    return await api.post('/api/user/login', { email, password });
  }

  static async logout(){
    return await api.post('/api/user/logout');
  }
}
