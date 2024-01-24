// const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = '/api';

const AUTH = '/auth';
const USER = '/users';
const REPROT = '/report';

const API_PATH = {
  AUTH: {
    login: () => SERVER_URL + AUTH + '/login',
    logout: () => SERVER_URL + AUTH + '/logout',
    updateToken: () => SERVER_URL + AUTH + '/refresh_token',
  },
  REPORT: {
    create: (id: any) => SERVER_URL + REPROT + `/create/${id}`,
    find: (id: any) => SERVER_URL + REPROT + `/find/${id}`,
  },
  USER: {
    getProfile: (id: any) => SERVER_URL + USER + `/${id}`,
  },
};

export default API_PATH;
