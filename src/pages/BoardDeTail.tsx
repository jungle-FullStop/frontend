import NavBar from '@/components/Common/NavBar';
import MDEditor from '@uiw/react-md-editor';
import anonymousImage from '@assets/image/anonymousImage.png';
import { useFindBoardDetail } from '@hooks/Board/useFindBoardDetail.tsx';
import { Footer } from '@/components/Common/Footer';
import { useParams } from 'react-router-dom';
import { Setting } from '@/components/Common/Setting';
import { Ad } from '@components/Common/Ad.tsx';

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
  // 년도, 달, 요일 변수에 담기
  const writeYear: number = writeDate.getFullYear();
  const writeMonth: number = writeDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const writeDay: number = writeDate.getDate();

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
      <div className={'sub-container'}>
        <div className={'board-contents-container'}>
          <div>
            <p className={'pb-5 text-5xl font-bold text-black'}> {data.board.title}</p>
            <div className="flex items-center">
              <img
                className="mr-5 h-12 w-12 rounded-full object-cover object-center"
                src={data.user.profileImage ? data.user.profileImage : anonymousImage}
                alt="nature image"
              />
              <p className="text-lg"> {`${writeYear}년 ${writeMonth}월 ${writeDay}일`} </p>
              <p className="ml-auto text-lg font-bold"> 작성 {beforeTime} </p>
            </div>
          </div>
          <Ad mode={'sparta'} />
          <div data-color-mode="light" className={'mx-auto'}>
            <MDEditor.Markdown
              source={data.board.contents}
              style={{ fontSize: '23px', width: 700 }}
            />
          </div>
        </div>
      </div>
      <Setting />
      <Footer />
    </div>
  );
};
