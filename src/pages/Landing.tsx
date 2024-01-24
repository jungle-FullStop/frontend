// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';

import Header from '@components/Landing/Header';
import { Link } from 'react-router-dom';
import { GOOGLE_LOGIN_FORM_URL } from '@/util/Constants/constants';

const Landing = () => {
  return (
    <div id="Container" className="flex h-screen w-screen flex-col">
      <Header />
      <div id="MainContainer" className="flex flex-grow items-center justify-center">
        <div id="Main" className="flex flex-col justify-end pe-12 text-left">
          <Typography color="orange" className="text-5xl font-semibold">
            TIL을 쓰지 않으면,
          </Typography>
          <Typography color="orange" className="mb-3 text-5xl font-semibold">
            나의 하루는 끝나지 않는다
          </Typography>
          <Typography color="amber" className="mb-7 text-7xl font-black">
            티.나.끝
          </Typography>
          <div id="LoreTextContainer" className="mb-14">
            <Typography className="text-3xl font-extrabold">
              티.나.끝의 가이드라인과 함께
            </Typography>
            <Typography className="text-3xl font-extrabold">TIL을 작성해보세요.</Typography>
          </div>
          <div id="googleLoginButton" className="flex flex-col justify-end p-0">
            <Link to={GOOGLE_LOGIN_FORM_URL}>
              <Button
                size="lg"
                color="white"
                className="flex w-72 items-center border-2 border-solid shadow-lg"
              >
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                Google 계정으로 로그인하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
