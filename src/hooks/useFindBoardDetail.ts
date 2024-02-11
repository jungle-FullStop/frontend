import { useRecoilState } from 'recoil';
import { cardListState } from '@store/Store.ts';
import { useEffect, useState } from 'react';
import { findUserBoard } from '@api/BoardApi.ts';
import { BoardType } from '@type/board/BoardType.tsx';

export const useFindBoardDetail = (id: any) => {
  const [cardList, setCardList] = useRecoilState<any>(cardListState);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const userId = localStorage.getItem('userId');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [beforeTime, setBeforeTime] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userBoardResponse = await findUserBoard(Number(userId));
        const userImage = userBoardResponse.user.profileImage;
        const userName = userBoardResponse.user.name;
        const cardList = userBoardResponse.boards;
        setCardList(cardList);
        setUserImage(userImage);
        setUserName(userName);
      } catch (error) {
        console.log('여기서 실패');
      }

      if (typeof id === 'string') {
        const selectedCard: BoardType = cardList.find(
          (card: BoardType) => card.id === parseInt(id as string, 10),
        );
        setTitle(selectedCard.title);
        setContent(selectedCard.contents);
        const writeDate = new Date(selectedCard.timestamp);
        const currentDate = new Date();

        // 밀리초로 변환 후 차이 계산
        const timeDifference = currentDate.getTime() - writeDate.getTime();

        // 밀리초를 일로 변환 (1초 = 1000밀리초, 1분 = 60초, 1시간 = 60분, 1일 = 24시간)
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference >= 1) {
          setBeforeTime(`${daysDifference}일 전`);
        } else {
          const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
          setBeforeTime(`${hoursDifference}시간 전`);
        }
      } else {
        console.log('해당 id의 카드를 찾을 수 없습니다.');
      }
    };
    fetchData();
  }, []);

  return { userImage, userName, title, content, beforeTime };
};
