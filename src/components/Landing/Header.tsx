import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';
import logo from '@assets/image/logo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="Container" className="flex h-16 p-5">
      <div id="landingPageLinkButton" className="flex items-center">
        <Button
          variant="text"
          className="flex gap-x-3 p-2"
          onClick={() => navigate('/')}
          aria-label="메인 페이지로 이동"
        >
          <img src={logo} alt="메인로고" className="w-10" />
          <Typography color="amber" className="text-right text-4xl font-extrabold">
            티.나.끝
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Header;
