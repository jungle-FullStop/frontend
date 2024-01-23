// const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = '/api';

const AUTH = '/auth';

const API_PATH = {
  AUTH: {
    login: () => SERVER_URL + AUTH + '/login',
    logout: () => SERVER_URL + AUTH + '/logout',
    updateToken: () => SERVER_URL + AUTH + '/refresh_token',
  },
};

export default API_PATH;
