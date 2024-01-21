// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';

import Header from '@components/Landing/Header';

const Landing = () => {
  //   const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    // const { googleLoginUrl } = await fetchGoogleLogin();
    // window.location.href = googleLoginUrl;
    window.location.href = '/home';
  };

  //   useEffect(() => {
  //     if (accessToken) {
  //       navigate(PATH_NAME.TEAM_SELECT);
  //       return;
  //     }

  //     if (accessToken) {
  //       resetToken();
  //       return;
  //     }
  //   }, [navigate]);

  return (
    <div id="Container" className="flex flex-col h-screen w-screen">
      <Header />
      <div id="MainContainer" className="flex items-center justify-center flex-grow">
        <div id="Main" className="flex flex-col justify-end pe-12 text-left">
          <Typography color="orange" className="text-5xl font-semibold">
            TIL을 쓰지 않으면,
          </Typography>
          <Typography color="orange" className="text-5xl font-semibold mb-3">
            나의 하루는 끝나지 않는다
          </Typography>
          <Typography color="amber" className="text-7xl font-black mb-7">
            티.나.끝
          </Typography>
          <div id="LoreTextContainer" className="mb-14">
            <Typography className="text-3xl font-extrabold">
              티.나.끝의 가이드라인과 함께
            </Typography>
            <Typography className="text-3xl font-extrabold">TIL을 작성해보세요.</Typography>
          </div>
          <div id="googleLoginButton" className="flex flex-col justify-end p-0">
            <Button
              size="lg"
              color="white"
              className="flex items-center w-72 border-solid border-2 shadow-lg"
              onClick={handleGoogleLogin}
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              Google 계정으로 로그인하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
