import { useNavigate } from 'react-router-dom';
import { HomeProfile } from '@/components/Common/HomeProfile';
import NavBar from '@/components/Common/NavBar';
import GrassTooltip from '@/components/Home/GrassTooltip';
import { Button } from '@material-tailwind/react';

const Home = () => {
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
  console.log(lastDayMonth);

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

  console.log(dateRange);

  const imgUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAIVBMVEXY2Njz8/Pq6urv7+/h4eHb29vo6Oje3t7j4+Pt7e3p6ekmc3lwAAADMElEQVR4nO2bC3KDMAxEMeab+x+4JZQBEkhBlq2NZt8JvGOtPkZUFSGEEEIIIYQQQgghhBBCCCEEnXbo6hjDLzHW3dBan0dEO9ThjfrrxDQHKv60NNZnu0ETz2Q8w+xbpPQfZTyl9NZnvEB7GlS7AIP3SnNFxgR4fHVXdYTQWZ/1A+14XUcII2x4tf+6fE8EVXJXB6qS+zpAldzyx8Jofep3buSrLXC563L9eAWsnrRSHSFg2eRSX3JMbX32Lb1cRwhIHaQg865E69OviJ0+g+P3pAsBupLEC8G5koSUNQOSuBJqyAJGLRnShQzWGp4kRxZKbKXrCMFaw4SCRTBMomARDJMIB5E9CGOJgtcx3J7Yn8wgdCluhGjogMi/FEIhmXBjdjdC3BRENy2Km6bRTRvvZrDyM+q6eXxw8xzk5oHOz5Opm0dsP58V3Hzo8fPpzc3HUD+fp90sDPhZ4fCzVONnzcnN4pmfVUA/y5mVm3XZys8Cs5+V8srNkv+Ek98uJpz8CDPh5NekGRc/ixFCCCHky2mb4TGO8cLkHuM4PoYGsGfph1r0Ih/rAWc2Oexz74DRE59PHre0GE8pvcoiykxnF2O96Ln3nNFGSqMs4ymlfIT9/1Qio/ADS6vojVe6gilMZUXrnFKbKfeeqiWUed5OXti4QgHTZ3THltxv9fnDaiFveOVKukfkTMRJmxr3yaakiM23ZLJ8cR2ZlBjoyKKksD8W1H1ipENdiWQ/QwflrYJidfAd1b2bQn3JMYrdiknCWlFLXSo/VqSgZRNDg8wo2STzPHgFlZnRPLAmNILLNGMtKGQus5K+J73Am5X0PckL9MYlZCW1mJin3oXEFAzikIk0l8BcSOKVAF1I2pVA1JCFlFpiffY9ch0wuXdGnoFVvnPqIf6JCaJd3CJtHQH69z3Sbh4ssuSxZX3ud2Q6oKrhjKwmwllEahI4i0hNAjJSbZGNV9anPkKiA64cTkhKIlijNSNptwCTlixtPawPfcRDIARoyl2RzLtuhACWEVkhcSPE+szHUAgaFIIGhaBBIWhQCBoUggaFoEEhaFAIGhSCBoWgQSFoUAgap8f9Ac1KQOtCVp1TAAAAAElFTkSuQmCC';
  const navigate = useNavigate();

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
                onClick={() => navigate('/loading')}
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
