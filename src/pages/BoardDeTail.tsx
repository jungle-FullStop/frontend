import NavBar from '@/components/Common/NavBar';
import MDEditor from '@uiw/react-md-editor';
import anonymousImage from '@assets/image/anonymousImage.png';
import { useFindBoardDetail } from '@hooks/Board/useFindBoardDetail.tsx';
import teamspartaAd from '@assets/image/teamspartaAd.png';
import { Footer } from '@/components/Common/Footer';
import { useParams } from 'react-router-dom';

export const BoardDetail = () => {
  const { boardId } = useParams();
  const { data, isLoading, isError } = useFindBoardDetail(Number(boardId));

  if (isLoading) {
    return (
      <div className="main-container">
        <NavBar />
        <div className="flex h-screen items-center justify-center gap-5">
          <p>선택된 TIL 정보를 불러오는 중...</p>
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
          <p>선택된 TIL 정보를 불러오지 못했습니다!</p>;
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>;
        </div>
      </div>
    );
  }

  // 작성 시간 계산
  const writeDate = new Date(data.board.timestamp);
  const currentDate = new Date();
  let beforeTime;

  // 밀리초로 변환 후 차이 계산
  const timeDifference = currentDate.getTime() - writeDate.getTime();

  // 밀리초를 일로 변환 (1초 = 1000밀리초, 1분 = 60초, 1시간 = 60분, 1일 = 24시간)
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference >= 1) {
    beforeTime = `${daysDifference}일 전`;
  } else {
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    beforeTime = `${hoursDifference}시간 전`;
  }

  return (
    <div className="main-container">
      <NavBar />
      {/* <div className="mx-auto mb-5 mt-5 flex w-[90%] flex-row items-end">
      </div> */}
      <div className="mx-auto w-[60%]  p-5">
        <p className={'mb-10 mt-8 pr-5 text-5xl font-bold text-black'}> {data.board.title}</p>
        <div className="flex items-center">
          <div>
            <img
              className="mr-5 h-12 w-12 rounded-full object-cover object-center"
              src={data.user.profileImage ? data.user.profileImage : anonymousImage}
              alt="nature image"
            />
          </div>
          <div>
            <p className='text-lg'> 2024년 2월 11일 </p>
          </div>
          <div className="ml-auto font-bold">
            <p className='text-lg'>  작성 {beforeTime}</p>    
          </div>
        </div>
        <img src={teamspartaAd} className='mt-10 mb-20'></img>
      </div>
      <div className="mx-auto w-[60%]">
        <div data-color-mode="light ">
          <MDEditor.Markdown source={data.board.contents} style={{ fontSize: '23px' }} />
        </div>
      </div>
      <div className='mb-10 mt-10'></div>
      <Footer></Footer>
    </div>
  );
};
