import NavBar from '@/components/Common/NavBar';
import { CardDefault } from '@components/Board/CardDefault';
import { useNavigate } from 'react-router-dom';
import { useFindUserBoard } from '@hooks/useFindUserBoard.ts';
import { WriteTIL } from '@components/Home/WriteTIL.tsx';

export const Board = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useFindUserBoard();

  if (isLoading) {
    return (
      <div className="main-container">
        <NavBar />
        <div className="flex h-screen items-center justify-center gap-5">
          <p>TIL 저장소를 불러오는 중...</p>
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="main-container">
        <NavBar />
        <div className="flex h-screen items-center justify-center gap-5">
          <p>TIL 저장소를 불러오지 못했습니다!</p>
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <NavBar />
      <div className="w-[90%}">
        <div className="TIL-container">
          {data.boards.length > 0 ? (
            data.boards.map((card: any, items: number) => {
              return (
                <div
                  className="TIL opacity-85 shadow-xl"
                  key={items}
                  onClick={() => {
                    navigate(`/board/${card.id}`);
                  }}
                >
                  <CardDefault
                    cardTitle={card.title}
                    cardContents={card.contents}
                    cardDate={card.timestamp}
                    userImage={data.user.profileImage}
                    userName={data.user.name}
                  />
                </div>
              );
            })
          ) : (
            <div className="mx-auto flex h-[500px] flex-col justify-center gap-y-8">
              <p className="text-5xl font-bold">작성하신 TIL이 없어요.</p>
              <WriteTIL color={'yellow'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
