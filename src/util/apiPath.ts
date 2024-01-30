// const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = '/api';

const AUTH = '/auth';
const USER = '/users';
const REPROT = '/report';
const MINDMAP = '/mindmap';
<<<<<<< HEAD
const BOARD = '/board'
=======
const FRIEND = '/friends';
const MEMBER = '/member';
>>>>>>> main

const API_PATH = {
  AUTH: {
    login: () => SERVER_URL + AUTH + '/login',
    logout: () => SERVER_URL + AUTH + '/logout',
    updateToken: () => SERVER_URL + AUTH + '/refresh_token',
  },
  USER: {
    profile: () => SERVER_URL + USER,
    userProfile: (id: number) => SERVER_URL + USER + `/${id}`,
    searchUser: (name: string) => SERVER_URL + USER + '/search' + `/${name}`,
  },
  REPORT: {
    find: (id: any) => SERVER_URL + REPROT + `/find/${id}`,
    create: (id: any) => SERVER_URL + REPROT + `/create/${id}`,
  },
  MINDMAP: {
    find: (id: any) => SERVER_URL + MINDMAP + `/find/${id}`,
    create: (id: any) => SERVER_URL + MINDMAP + `/create/${id}`,
  },
<<<<<<< HEAD
  BOARD :{
    find: () => SERVER_URL + BOARD + `/find/`,
    create: () => SERVER_URL + BOARD + `/create/`,
  }
=======
  FRIEND: {
    search: (name: string) => SERVER_URL + FRIEND + '/search' + `/${name}`,
    list: (userId: number) => SERVER_URL + FRIEND + `/${userId}`,
    rankList: (userId: number) => SERVER_URL + FRIEND + `/rank/${userId}`,
    request: (userId: number) => SERVER_URL + FRIEND + '/request' + `/${userId}`,
    allow: (senderId: number) => SERVER_URL + FRIEND + '/allow' + `/${senderId}`,
  },
  MEMBER: {
    search: (name: string) => SERVER_URL + MEMBER + '/search' + `/${name}`,
    list: (userId: number) => SERVER_URL + MEMBER + `/${userId}`,
    request: (userId: number) => SERVER_URL + MEMBER + '/request' + `/${userId}`,
    allow: (senderId: number) => SERVER_URL + MEMBER + '/allow' + `/${senderId}`,
  },
>>>>>>> main
};

export default API_PATH;
