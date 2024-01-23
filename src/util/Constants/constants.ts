export const PAGE_URL = {
  LANDING: '/',
  HOME: '/home',
  LOGIN: '/login',
  AUTH: '/auth',
  LOADING: '/loading',
  EDIT: '/edit',
  NOT_FOUND: '/not/found',
};

export const WAITING_TIME = 10;

export const GOOGLE_LOGIN_FORM_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&" +
  "redirect_uri=http://localhost:5173/auth&" +
  "client_id=998666507743-8fe6chebijnoabeeql68cat66bbit1vj.apps.googleusercontent.com&" +
  "scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&" +
  "access_type=offline"
