import { atom } from 'recoil';
import { Data } from '@/types/board/BoardType';

const cardListState = atom({
  key: 'cardList',
  default: [],
});

//오늘 TIL을 썼으면 true 안 썼으면 false 가지는 변수
const todayState = atom({
  key: 'today',
  default: false,
});

//오늘 TIL의 id(페이지) 값 저장할 변수
const todayTILState = atom({
  key: 'todayTIL',
  default: 0,
});

const todayKeyword = atom({
  key: 'todayKeyword',
  default: [] as string[],
});

const currentDate = new Date();

const TILArrayState = atom<Data>({
  key: 'TILArray',
  default: {
    user: { id: -1, ProfileImg: '' },
    boards: [{ title: '', contents: '', id: -1, userId: -1, timestamp: currentDate }],
  },
});

export { cardListState, todayState, todayTILState, TILArrayState, todayKeyword };
