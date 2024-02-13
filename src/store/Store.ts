import { atom } from 'recoil';

//오늘 TIL을 썼으면 true 안 썼으면 false 가지는 변수
const todayState = atom({
  key: 'today',
  default: false,
});

const pageMode = atom({
  key: 'mode',
  default: 'user',
});

const todayKeyword = atom({
  key: 'todayKeyword',
  default: [] as string[],
});

export { todayState, pageMode, todayKeyword };
