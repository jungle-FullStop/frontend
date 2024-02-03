import { RecoilState, atom } from 'recoil';
import { BoardType } from '@/types/board/BoardType';
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

let currentDate = new Date();

const TILArrayState= atom<Data>({
  key: 'TILArray',
  default: {
    user: { id: -1, ProfileImg: '' },
    boards: [{ contents: '', id: -1, userId: -1, timestamp: currentDate }]
  },
});

export { cardListState, todayState, todayTILState,TILArrayState };
