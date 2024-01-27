import { useEffect } from 'react';
import NavBar from '@/components/Common/NavBar';
import { HomeProfile } from '@/components/Home/HomeProfile';
import { Friends } from '@/components/Home/Friends';
import { WriteTIL } from '@/components/Home/WriteTIL';
import { UserGrass } from '@/components/Home/UserGrass';
import { getProfile } from '@/api/ProfileAPI';
import { createMindmap } from '@/api/MindmapAPI';

const Home = () => {
  const getUserProfile = async () => {
    const userProfile = await getProfile();
    localStorage.setItem('userName', userProfile?.name);
    localStorage.setItem('userProfileImage', userProfile?.profileImage);
  };

  const getMindmap = async () => {
    const mindmap = await createMindmap();
    localStorage.setItem('todayMindmap', mindmap?.data);
  };

  useEffect(() => {
    getUserProfile();
    getMindmap();
  }, []);

  return (
    <div className="main-container">
      <NavBar />
      <div className="sub-container">
        <div className="flex flex-row place-content-center gap-x-10">
          <div className="flex flex-col gap-y-10">
            <HomeProfile />
            <Friends />
          </div>
          <div className="flex flex-col gap-y-10">
            <WriteTIL />
            <UserGrass />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
