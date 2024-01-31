import { useEffect, useState } from 'react';
import NavBar from '@/components/Common/NavBar';
import { UserProfile } from '@components/Home/Profile/UserProfile.tsx';
import { FriendInfo } from '@components/Home/Info/FriendInfo.tsx';
import { WriteTIL } from '@/components/Home/WriteTIL';
import { UserGrass } from '@/components/Home/UserGrass';
import { getProfile } from '@/api/ProfileAPI';
import { createMindmap } from '@/api/MindmapAPI';
import { TeamGrass } from '@/components/Home/TeamGrass';
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
          <div className="flex flex-row place-content-center gap-x-10">
            <div className="flex flex-col gap-y-10">
              <UserProfile />
              <FriendInfo />
            </div>
            <div className="flex flex-col gap-y-10">
              <WriteTIL color="yellow" />
              <UserGrass />
              <Quotes mode="user" />
            </div>
          </div>
        </div>

        <div className="sub-container card-back">
          <div className="flex flex-row place-content-center gap-x-10">
            <div className="flex flex-col gap-y-10">
              <TeamProfile />
              <TeamInfo />
            </div>
            <div className="flex flex-col gap-y-10">
              <WriteTIL color="green" />
              <TeamGrass />
              <Quotes mode="team" />
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Home;
