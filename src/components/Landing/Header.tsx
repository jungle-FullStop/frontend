import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import logo from '@assets/image/logo.png';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Button
        variant="text"
        className="flex items-center gap-x-3 p-5"
        onClick={() => navigate('/')}
        aria-label="메인 페이지로 이동"
      >
        <img src={logo} alt="메인로고" className="w-16" />
        <p className="title text-4xl font-extrabold text-yellow-500">티.나.끝</p>
      </Button>
    </div>
  );
};
