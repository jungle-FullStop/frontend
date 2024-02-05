export const PAGE_URL = {
  LANDING: '/',
  HOME: '/home',
  AUTH: '/auth',
  LOADING: '/loading',
  EDIT: '/edit',
  NOT_FOUND: '/not/found',
  TEAM: '/team',
  BOARD: '/Board',
  BOARD_DETAIL: '/Board/:id',
};

export const WAITING_TIME = 5;

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
  DETAIL: 'detail',
};

export const NAVBAR_MODAL_CONTENT_TYPE = {
  DETAIL: 'detail',
  TEAM: 'Team',
};

export const PROFILE_BUTTON_TYPE = {
  LIST: 'list',
  RECEIVED: 'received',
  SEND: 'send',
  STRANGER: 'stranger',
};

export const reactQueryKeys = {
  Report: 'report',
  BOARD: 'board',
  ProfileData: 'profileData',
  SearchDataList: 'searchDataList',
  FriendList: 'friendList',
  FriendRankList: 'friendRankList',
  MemberList: 'memberList',
  CreateTeam: 'createTeam',
  JoinTeam: 'joinTeam',
  SendList: 'sendList',
  ReceivedList: 'receivedList',
};

export const DEBOUNCE_TIME = 500;

export const QUOTES = [
  '잊지 마라,\n 네 인생의 주인은 너다.',
  '정글에서의 시간은 늘 부족하고 학습량은 많다.\n 단, 너만 그런 것은 아니다.',
  '정글에는 오답이 없다.\n 그렇다고 정답이 있는 것도 아니다.',
  '오늘의 TIL을 적지 않으면\n 정글의 하루는 끝나지 않는다.',
  '몰입하고 몰입해라.\n 오늘의 몰입이 내일의 성장을 만든다.',
  '끝의 끝까지 하면 기회는 반드시 온다.\n 크래프톤이 그랬다.',
];

export const KEYWORDS = [
  '32 Bit / 64 Bit 차이',
  'Python Call by value, Call by reference',
  'Garbage Collect',
  'jpg, png, gif 각각의 차이',
  'SSD와 HDD',
  'implicit, explicit, seglist, buddy system',
  'Fragmentation(internal, external)',
  'BSD 소켓',
  'HTTP METHOD - GET, POST, DELETE, UPDATE',
  'Semaphore와 Mutex',
  'Race Condition과 Deadlock',
  'Page Fault와 TLB',
  'B Tree와 B+ Tree',
];

export const INVITE_CODE_LENGTH = 8;
