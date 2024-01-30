// const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = '/api';

const AUTH = '/auth';
const USER = '/users';
const REPROT = '/report';
const MINDMAP = '/mindmap';
const BOARD = '/board'

const API_PATH = {
  AUTH: {
    login: () => SERVER_URL + AUTH + '/login',
    logout: () => SERVER_URL + AUTH + '/logout',
    updateToken: () => SERVER_URL + AUTH + '/refresh_token',
  },
  USER: {
    getProfile: (id: any) => SERVER_URL + USER + `/${id}`,
  },
  REPORT: {
    find: (id: any) => SERVER_URL + REPROT + `/find/${id}`,
    create: (id: any) => SERVER_URL + REPROT + `/create/${id}`,
  },
  MINDMAP: {
    find: (id: any) => SERVER_URL + MINDMAP + `/find/${id}`,
    create: (id: any) => SERVER_URL + MINDMAP + `/create/${id}`,
  },
  BOARD :{
    find: () => SERVER_URL + BOARD + `/find/`,
    create: () => SERVER_URL + BOARD + `/create/`,
  }
};

export default API_PATH;
