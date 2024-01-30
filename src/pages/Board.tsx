import NavBar from '@/components/Common/NavBar';
import { CardDefault } from '@components/Board/CardDefault';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_PATH from '@util/apiPath';
import { cardListState } from '@/store/Store';
import { useRecoilState } from 'recoil';
import { TabsWithIcon } from '@components/Board/TabsWithIcon';

export const Board = () => {
  const [cardList, setCardList] = useRecoilState<any>(cardListState);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_PATH.BOARD.find())
      .then((response) => {
        const cardList = response.data;
        setCardList(cardList);
        console.log(cardList);
      })
      .catch(() => {
        console.log('실패');
      });
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
                  <CardDefault cardContents={data.contents} cardDate={data.timestamp} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
