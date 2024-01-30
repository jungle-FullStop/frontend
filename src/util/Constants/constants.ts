export const PAGE_URL = {
  LANDING: '/',
  HOME: '/home',
  AUTH: '/auth',
  LOADING: '/loading',
  EDIT: '/edit',
  NOT_FOUND: '/not/found',
};

export const WAITING_TIME = 10;

export const GOOGLE_LOGIN_FORM_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&' +
  'redirect_uri=http://localhost:5173/auth&' +
  'client_id=998666507743-8fe6chebijnoabeeql68cat66bbit1vj.apps.googleusercontent.com&' +
  'scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&' +
  'access_type=offline';

export const DEFAULT = 'default';
export const LARGE = 'large';
export const SMALL = 'small';
export const DEFAULT_VIEWBOX_WIDTH = 24;
export const DEFAULT_VIEWBOX_HEIGHT = 24;

export const LARGE_VIEWBOX_WIDTH = 95;
export const LARGE_VIEWBOX_HEIGHT = 82;

export const PROFILE_MODAL_CONTENT_TYPE = {
  LIST: 'list',
  REQUEST: 'request',
  EDIT: 'edit',
};

export const PROFILE_BUTTON_TYPE = {
  LIST: 'list',
  RECEIVED: 'received',
  SEND: 'send',
  STRANGER: 'stranger',
};

export const reactQueryKeys = {
  Grass: 'grass',
  ProfileData: 'profileData',
  SearchDataList: 'searchDataList',
  FriendList: 'friendList',
  MemberList: 'memberList',
  SendList: 'sendList',
  ReceivedList: 'receivedList',
};

export const DEBOUNCE_TIME = 500;
