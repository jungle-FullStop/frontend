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
import { TeamProfile } from '@/components/Home/TeamProfile';
import { FriendsInfo } from '@/components/Home/FriendsInfo';
import { requestForToken } from '@/components/FirebaseNotifications/Firebase';

const Home = () => {
  const [, setToken] = useState('');
  const [, setLoading] = useState(true);

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

  const getToken = async () => {
    try {
      const resToken = await requestForToken();
      setToken(resToken ?? '');
    } catch (error) {
      console.error('Failed to fetch FCM token:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
    getMindmap();
    getToken();
  }, []);

  return (
    <div className="main-container">
      <NavBar flipCard={flipCard} />
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="sub-container card-front">
          <div className="flex flex-row place-content-center gap-x-10">
            <div className="flex flex-col gap-y-10">
              <UserProfile />
              {/* <TeamProfile /> */}
              <Friends />
              {/* <FriendsInfo /> */}
            </div>
            <div className="flex flex-col gap-y-10">
              <WriteTIL />
              <UserGrass />
              {/* <TeamGrass /> */}
            </div>
          </div>
        </div>
        <div className="sub-container card-back">
          <div className="flex flex-row place-content-center gap-x-10">
            <div className="flex flex-col gap-y-10">
              {/* <UserProfile /> */}
              <TeamProfile />
              {/* <Friends /> */}
              <FriendsInfo />
            </div>
            <div className="flex flex-col gap-y-10">
              <WriteTIL />
              {/* <UserGrass /> */}
              <TeamGrass />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
