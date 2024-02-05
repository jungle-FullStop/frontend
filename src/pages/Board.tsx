import NavBar from '@/components/Common/NavBar';
import { CardDefault } from '@components/Board/CardDefault';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardListState } from '@/store/Store';
import { useRecoilState } from 'recoil';
import { TabsWithIcon } from '@components/Board/TabsWithIcon';
import { findUserBoard } from '@/api/BoardApi';

export const Board = () => {
  const [cardList, setCardList] = useRecoilState<any>(cardListState);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  // useEffect(() => {
  //   axios
  //     .get(`${API_PATH.BOARD.find()}/${userID}`)
  //     .then((response) => {
  //       const userImage = response.data.user.profileImage;
  //       const userName = response.data.user.name;
  //       const cardList = response.data.boards;
  //       setCardList(cardList);
  //       setUserImage(userImage);
  //       setUserName(userName);
  //       // console.log(cardList);
  //     })
  //     .catch(() => {
  //       console.log('여기서 실패');
  //     });
  // }, []);

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

  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className=" mt-5 flex w-1/3 min-w-96">
        <div className="w-full">
          <TabsWithIcon />
        </div>
      </div>
      <div className="TIL-container">
        {cardList
          ? cardList.map((data: any, items: number) => {
              return (
                <div
                  className="TIL opacity-85 shadow-xl"
                  key={items}
                  onClick={() => {
                    navigate(`/board/${data.id}`);
                  }}
                >
                  <CardDefault
                    cardContents={data.contents}
                    cardDate={data.timestamp}
                    userImage={userImage}
                    userName={userName}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
