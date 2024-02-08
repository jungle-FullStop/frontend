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
import { Slogan } from '@/components/Home/Slogan';
import { Footer } from '@components/Common/Footer.tsx';

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

  const [barPosition, setBarPosition] = useState(0);

  const handleScroll = () => {
    const position = 800 < 0 + window.scrollY ? 800 : 0 + window.scrollY;
    setBarPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-container">
      <NavBar flipCard={flipCard} />
      <div className={`card ${isFlipped ? 'flipped' : ''} mx-auto`}>
        <div className="sub-container card-front">
          <div className={'float-left'}>
            <div className="flex flex-col gap-y-8">
              <Slogan color="yellow" />
              <FriendInfo />
              <UserGrassDiv />
            </div>
          </div>

          <div className={'sidebar-container'} style={{ top: barPosition }}>
            <div className="flex flex-col gap-y-3">
              <UserProfile />
              <WriteTIL color="yellow" />
              <Quotes mode="user" />
            </div>
          </div>
        </div>

        <div className="sub-container card-back">
          <div className="flex flex-col gap-y-8">
            <Slogan color="green" />
            <TeamInfo />
            <TeamGrassDiv />
          </div>

          <div className={'sidebar-container'} style={{ top: barPosition }}>
            <div className="flex flex-col gap-y-3">
              <TeamProfile />
              <WriteTIL color="green" />
              <Quotes mode="team" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal />
    </div>
  );
};

export default Home;
