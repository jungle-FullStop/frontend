import { atom } from 'recoil';
import { Data } from '@/types/board/BoardType';

const cardListState = atom({
  key: 'cardList',
  default: [],
});

const todayState = atom({
  key: 'today',
  default: false,
});
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
    boards: [{ contents: '', id: -1, userId: -1, timestamp: currentDate }],
  },
});

export { cardListState, todayState, todayTILState, TILArrayState, todayKeyword };
