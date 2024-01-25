import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeProfile } from '@/components/Common/HomeProfile';
import NavBar from '@/components/Common/NavBar';
import GrassTooltip from '@/components/Home/GrassTooltip';
import { Button } from '@material-tailwind/react';
import { getProfile } from '@/api/Profile';
import { createReport } from '@/api/Report';
import { dateRange } from '@/util/Constants/date';

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
