import NavBar from '@/components/Common/NavBar';
import { CardDefault } from '@components/Board/CardDefault';
import { useNavigate } from 'react-router-dom';
import { useFindUserBoard } from '@hooks/useFindUserBoard.ts';
import { WriteTIL } from '@components/Home/WriteTIL.tsx';

export const Board = () => {
  const navigate = useNavigate();
  const { userImage, userName, cardList } = useFindUserBoard();

  return (
    <div className="main-container">
      <NavBar />
      <div className="w-[90%}">
        <div className="TIL-container">
          {cardList.length > 0 ? (
            cardList.map((data: any, items: number) => {
              return (
                <div
                  className="TIL opacity-85 shadow-xl"
                  key={items}
                  onClick={() => {
                    navigate(`/board/${data.id}`);
                  }}
                >
                  <CardDefault
                    cardTitle={data.title}
                    cardContents={data.contents}
                    cardDate={data.timestamp}
                    userImage={userImage}
                    userName={userName}
                  />
                </div>
              );
            })
          ) : (
            <div className="mx-auto flex h-[500px] flex-col justify-center gap-y-8">
              <p className="text-5xl font-bold">아직 작성하신 TIL이 없어요.</p>
              <WriteTIL color={'yellow'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
