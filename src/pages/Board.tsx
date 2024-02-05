import NavBar from '@/components/Common/NavBar';
import { CardDefault } from '@components/Board/CardDefault';
import { useNavigate } from 'react-router-dom';
import { TabsWithIcon } from '@components/Board/TabsWithIcon';
import { useFindUserBoard } from '@hooks/useFindUserBoard.ts';

export const Board = () => {
  const navigate = useNavigate();
  const { userImage, userName, cardList } = useFindUserBoard();

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
