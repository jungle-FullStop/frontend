import { useRecoilState } from 'recoil';
import { cardListState } from '@store/Store.ts';
import { useEffect, useState } from 'react';
import { findUserBoard } from '@api/BoardApi.ts';

export const useFindUserBoard = () => {
  const [cardList, setCardList] = useRecoilState<any>(cardListState);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const userId = localStorage.getItem('userId');

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
    };
    fetchData();
  }, []);

  return { userImage, userName, cardList };
};
