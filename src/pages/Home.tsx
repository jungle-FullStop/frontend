import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeProfile } from '@/components/Common/HomeProfile';
import NavBar from '@/components/Common/NavBar';
import GrassTooltip from '@/components/Home/GrassTooltip';
import { Button } from '@material-tailwind/react';
import { getProfile } from '@/api/ProfileAPI';
import { createReport } from '@/api/ReportAPI';
import { dateRange } from '@/util/Constants/dateConstants';
import { createMindmap, findMindmap } from '@/api/MindmapAPI';

const Home = () => {
  const navigate = useNavigate();

  const getUserProfile = async () => {
    const userProfile = await getProfile();
    localStorage.setItem('userName', userProfile?.name);
    localStorage.setItem('userProfileImage', userProfile?.profileImage);
  };

  const getMindmap = async () => {
    const mindmap = await createMindmap();
    localStorage.setItem('todayMindmap', mindmap?.data);
  };

  const generateReport = () => {
    createReport();
    navigate('/loading');
  };

  useEffect(() => {
    getUserProfile();
    getMindmap();
  }, []);

  const grassElements = dateRange.map((date, i) => {
    return <GrassTooltip date={date} i={i} key={i} />;
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
