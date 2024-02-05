import { useEffect, useState } from 'react';
import NavBar from '@/components/Common/NavBar';
import { UserProfile } from '@components/Home/Profile/UserProfile.tsx';
import { FriendInfo } from '@components/Home/Info/FriendInfo.tsx';
import { WriteTIL } from '@/components/Home/WriteTIL';
import { UserGrassDiv } from '@components/Grass/UserGrassDiv.tsx';
import { getProfile } from '@/api/ProfileAPI';
import { createMindmap } from '@/api/MindmapAPI';
import { TeamGrassDiv } from '@components/Grass/TeamGrassDiv.tsx';
import { TeamProfile } from '@components/Home/Profile/TeamProfile.tsx';
import { requestForToken } from '@/components/FirebaseNotifications/Firebase';
import Modal from '@components/Common/Modal';
import useModal from '@hooks/useModal.tsx';
import { Quotes } from '@components/Home/Quotes.tsx';
import TeamInfo from '@components/Home/Info/TeamInfo.tsx';

const Home = () => {
  const userId = localStorage.getItem('userId') as string;
  const [, setToken] = useState('');
  const [, setLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const { closeModal } = useModal();

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
      const resToken: any = await requestForToken();
      setToken(resToken);
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
    closeModal();
  }, [userId]);

  return (
    <div className="main-container">
      <NavBar flipCard={flipCard} />
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="sub-container card-front">
          <div className="w-full flex flex-row place-content-center gap-x-10">
            <div className="w-1/2 flex flex-col gap-y-5">
              <UserProfile />
              <FriendInfo />
            </div>
            <div className="w-1/3 flex flex-col gap-y-5">
              <WriteTIL id={userId} color="yellow" />
              <Quotes mode="user" />
              <UserGrassDiv />
            </div>
          </div>
        </div>

        <div className="sub-container card-back">
          <div className="flex flex-row place-content-center gap-x-10">
            <div className="flex flex-col gap-y-5">
              <TeamProfile />
              <TeamInfo />
            </div>
            <div className="flex flex-col gap-y-5">
              <WriteTIL id={userId} color="green" />
              <Quotes mode="team" />
              <TeamGrassDiv />
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Home;
