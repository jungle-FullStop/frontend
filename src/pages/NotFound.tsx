import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import dino from '@assets/image/dino.png';

import { Button } from '@material-tailwind/react';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    setTimeout(() => {
      goToHome();
    }, 3000);
  }, []);

  return (
    <main className="from-mint to-body flex h-screen w-screen flex-col items-center justify-center gap-5 bg-gradient-to-b">
      <img src={dino} alt={'404 이미지'} />
      <div className="text-center">
        <p>저런, 길을 잃으셨군요!</p>
        <p>걱정하지 마세요, 3초 뒤 홈으로 이동시켜 드릴게요.</p>
      </div>
      <Button onClick={goToHome}>바로 홈으로 이동하기</Button>
    </main>
  );
};

export default NotFound;
