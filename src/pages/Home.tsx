import { useEffect, useState } from 'react';
import NavBar from '@/components/Common/NavBar';
import { UserProfile } from '@components/Home/Profile/UserProfile.tsx';
import { FriendInfo } from '@components/Home/Info/FriendInfo.tsx';
import { WriteTIL } from '@/components/Home/WriteTIL';
import { UserGrassDiv } from '@components/Grass/UserGrassDiv.tsx';
import { createMindmap } from '@/api/MindmapAPI';
import { TeamGrassDiv } from '@components/Grass/TeamGrassDiv.tsx';
import { TeamProfile } from '@components/Home/Profile/TeamProfile.tsx';
import { requestForToken } from '@/components/FirebaseNotifications/Firebase';
import Modal from '@components/Common/Modal';
import useModal from '@hooks/useModal.tsx';
import { Quotes } from '@components/Home/Quotes.tsx';
import TeamInfo from '@components/Home/Info/TeamInfo.tsx';
import { TeamSlogan } from '@/components/Home/Slogan/TeamSlogan';
import { UserSlogan } from '@/components/Home/Slogan/UserSlogan';

const Home = () => {
  const userId = localStorage.getItem('userId') as string;
  const [, setToken] = useState('');
  const [, setLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const { closeModal } = useModal();

  const flipCard = () => {
    setIsFlipped(!isFlipped);
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
    getMindmap();
    getToken();
    closeModal();
  }, [userId]);

  return (
    <div className="main-container">
      <NavBar flipCard={flipCard} />
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="sub-container card-front">
          <div className="flex w-full flex-row place-content-center ">
            <div className="flex w-[700px] flex-col">
              <UserSlogan/>
              <UserGrassDiv />
            </div>

            <div className="flex w-1/3 flex-col gap-y-8">
              <Quotes mode="user" />
              <UserProfile />
              <FriendInfo />
              {/* <WriteTIL id={userId} color="yellow" /> */}
            </div>
          </div>
        </div>

        <div className="sub-container card-back">
          <div className="flex w-full flex-row place-content-center ">
            <div className="flex w-[700px] flex-col">
              <TeamSlogan/>
              <TeamGrassDiv />
            </div>

            <div className="flex w-1/3 flex-col gap-y-8">
              <Quotes mode="team" />
              <TeamProfile />
              <TeamInfo />
              {/* <WriteTIL id={userId} color="green" /> */}
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Home;
