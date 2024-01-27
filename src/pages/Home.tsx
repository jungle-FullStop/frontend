import { useEffect, useState } from 'react';
import NavBar from '@/components/Common/NavBar';
import { UserProfile } from '@/components/Home/UserProfile';
import { Friends } from '@/components/Home/Friends';
import { WriteTIL } from '@/components/Home/WriteTIL';
import { UserGrass } from '@/components/Home/UserGrass';
import { getProfile } from '@/api/ProfileAPI';
import { createMindmap } from '@/api/MindmapAPI';
import { TeamGrass } from '@/components/Home/TeamGrass';
import { Button } from '@material-tailwind/react';
import { TeamProfile } from '@/components/Home/Teamprofile';
import { FriendsInfo } from '@/components/Home/FriendsInfo';

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

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
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <UserProfile />
            <TeamProfile />
            </div>
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <Friends />
            <FriendsInfo/>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <WriteTIL />
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
              <UserGrass />
              <TeamGrass />
            </div>
            <Button className="mx-auto rounded-full" onClick={flipCard}>
              뒤집어
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
