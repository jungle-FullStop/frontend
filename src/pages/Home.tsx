import { useEffect, useState } from 'react';
import NavBar from '@/components/Common/NavBar';
import { FriendInfo } from '@components/Home/Info/FriendInfo.tsx';
import { UserGrassDiv } from '@components/Grass/UserGrassDiv.tsx';
import { createMindmap } from '@/api/MindmapAPI';
import { TeamGrassDiv } from '@components/Grass/TeamGrassDiv.tsx';
import { requestForToken } from '@/components/FirebaseNotifications/Firebase';
import Modal from '@components/Common/Modal';
import useModal from '@hooks/Common/useModal.tsx';
import TeamInfo from '@components/Home/Info/TeamInfo.tsx';
import { Slogan } from '@/components/Home/Slogan';
import { Footer } from '@components/Common/Footer.tsx';
import { Setting } from '@components/Common/Setting.tsx';
import { HomeSideBar } from '@components/Common/HomeSideBar.tsx';

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
        <div className="home-container card-front">
          <div className={'float-left'}>
            <div className="flex flex-col gap-y-8">
              <Slogan color="yellow" />
              <FriendInfo />
              <UserGrassDiv />
            </div>
          </div>

          <HomeSideBar flipCard={flipCard} color={'yellow'} mode={'user'} />
        </div>

        <div className="home-container card-back">
          <div className="flex flex-col gap-y-8">
            <Slogan color="green" />
            <TeamInfo />
            <TeamGrassDiv />
          </div>

          <HomeSideBar flipCard={flipCard} color={'green'} mode={'team'} />
        </div>
      </div>
      <Setting />
      <Footer />
      <Modal />
    </div>
  );
};

export default Home;
