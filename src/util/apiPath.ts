// const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = '/api';

const AUTH = '/auth';
const USER = '/users';
const REPROT = '/report';
const MINDMAP = '/mindmap';
const BOARD = '/Board';
const FRIEND = '/friends';
const TEAM = '/team';
const PUSH = '/push';
const HISTROY = '/extension';
const GRASS = '/grass';

const API_PATH = {
  AUTH: {
    login: () => SERVER_URL + AUTH + '/login',
    logout: () => SERVER_URL + AUTH + '/logout',
    updateToken: () => SERVER_URL + AUTH + '/refresh_token',
  },
  USER: {
    userProfile: (id: number) => SERVER_URL + USER + `/${id}`,
    searchUser: (name: string) => SERVER_URL + USER + '/search' + `/${name}`,
  },
  REPORT: {
    find: () => SERVER_URL + REPROT + `/find`,
    create: () => SERVER_URL + REPROT + `/create`,
  },
  MINDMAP: {
    find: () => SERVER_URL + MINDMAP + `/find`,
    create: () => SERVER_URL + MINDMAP + `/create`,
  },
  BOARD: {
    find: (userId: number) => SERVER_URL + BOARD + `/find` + `/${userId}`,
    create: () => SERVER_URL + BOARD + `/create/`,
  },
  FRIEND: {
    search: (name: string) => SERVER_URL + FRIEND + '/search' + `/${name}`,
    list: (userId: number) => SERVER_URL + FRIEND + `/${userId}`,
    rankList: (userId: number) => SERVER_URL + FRIEND + '/rank' + `/${userId}`,
    request: (userId: number) => SERVER_URL + FRIEND + '/request' + `/${userId}`,
    allow: (senderId: number) => SERVER_URL + FRIEND + '/allow' + `/${senderId}`,
  },
  TEAM: {
    search: (name: string) => SERVER_URL + TEAM + '/search' + `/${name}`,
    list: () => SERVER_URL + TEAM + '/member',
    rankList: () => SERVER_URL + TEAM + '/rank',
    exile: () => SERVER_URL + TEAM + '/exile',
    create: () => SERVER_URL + TEAM + '/create',
    join: () => SERVER_URL + TEAM + '/join',
    teamProfile: (teamCode: string) => SERVER_URL + TEAM + `/${teamCode}`,
    updateState: () => SERVER_URL + TEAM + '/change-status',
  },
  PUSH: {
    push: () => SERVER_URL + PUSH,
    token: () => SERVER_URL + PUSH + `/token`,
  },
  HISTROY: {
    search: (keyword: string) => SERVER_URL + HISTROY + '/search' + `/${keyword}`,
  },
};

export default API_PATH;
