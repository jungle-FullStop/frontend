import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeProfile } from '@/components/Common/HomeProfile';
import NavBar from '@/components/Common/NavBar';
import GrassTooltip from '@/components/Home/GrassTooltip';
import { Button } from '@material-tailwind/react';
import { getProfile } from '@/api/Profile';
import { createReport } from '@/api/Report';

const Home = () => {
  const navigate = useNavigate();

  const getUserProfile = async () => {
    const userProfile = await getProfile();
    localStorage.setItem('userName', userProfile?.name);
    localStorage.setItem('userProfileImage', userProfile?.profileImage);
  };

  const generateReport = () => {
    createReport();
    navigate('/loading');
  };

  useEffect(() => {
    getUserProfile();
  }, []);
  //현재 날짜와 시각을 나타내는 클래스 생성
  const currentDate: Date = new Date();
  // console.log(currentDate)

  //현재 시각 기준 연도, 달, 1일 (만약 지금이 2023년 1월 26일이면 2023년 1월 1일 생성)
  const firstDayMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  // console.log(firstDayMonth);

  //현재 시각 기준 연도, 다음 달, 1일 (만약 지금이 2023년 1월 26일이면 2023년 2월 1일 생성)
  const firstDayNextMonth: Date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1,
  );
  // console.log(firstDayNextMonth)

  //현재 시각 기준 연도, 달, 마지막 일 (만약 지금이 2023년 1월 26일이면 2023년 1월 31일 생성)
  const lastDayMonth: Date = new Date(firstDayNextMonth.getTime() - 1);
  // console.log(lastDayMonth);

  //현재 마지막 달 시각을 0시 0분 0초로 초기화. 어차피 날짜만 필요하고 시각은 필요 없음
  lastDayMonth.setHours(0, 0, 0, 0);

  //현재 달의 시작과 끝을 담을 배열
  const dateRange: string[] = [];

  //쳣째 날이 마지막 날과 같아질 때까지 모든 날을 dateRange에 담음
  while (firstDayMonth <= lastDayMonth) {
    const dateString = firstDayMonth.toDateString();
    dateRange.push(dateString);
    firstDayMonth.setDate(firstDayMonth.getDate() + 1);
  }

  // console.log(dateRange);

  const grassElements = dateRange.map((date, i) => {
    return (
      <GrassTooltip date={date} i={i}>
        {/* <div className="m-[0.1rem] h-5 w-5 flex-grow rounded bg-gray-300" title={`${a}`}></div> */}
      </GrassTooltip>
    );
  });

  return (
    <div className="main-container">
      <NavBar />
      <div className="sub-container">
        <div className="flex flex-row place-content-between">
          <HomeProfile />
          <div className="flex flex-col gap-y-20">
            <div className="contents-container">
              <p className="text-center text-2xl font-bold">아직 TIL을 작성하지 않으셨나요?</p>
              <Button
                className="rounded-full bg-yellow-600 px-4 py-2 text-2xl font-bold text-white hover:bg-yellow-400"
                onClick={generateReport}
              >
                TIL 작성하기
              </Button>
            </div>
            <div className="contents-container">
              <p className="text-center text-lg font-bold sm:text-2xl">이번 달 TIL HISTORY.</p>
              <div className="border-brown container mx-auto grid h-auto w-80 grid-cols-7 grid-rows-5 rounded-lg border p-2">
                {grassElements}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
