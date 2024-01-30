import NavBar from '@/components/Common/NavBar';
import { CardDefault } from '@/components/board/CardDefault';
import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_PATH from '@util/apiPath';
import { cardListState } from '@/store/Store';
import { useRecoilState } from 'recoil';
import { TabsWithIcon } from '@/components/board/TabsWithIcon';

export const Board = () => {
  const [cardList, setCardList] = useRecoilState(cardListState);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_PATH.BOARD.find())
      .then((response) => {
        const cardList = response.data;
        setCardList(cardList);
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  console.log(cardList);

  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className=" w-1/3 min-w-96 mt-5 flex">
        <div className='w-full'><TabsWithIcon /></div>
      </div>
      <div className="card-container">
        {cardList
          ? cardList.map((data: any, items: number) => {
              return (
                <div
                  className="card shadow-xl opacity-85"
                  key={items}
                  onClick={() => {
                    navigate(`/board/${data.id}`);
                  }}
                >
                  <CardDefault cardContents={data.contents} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
