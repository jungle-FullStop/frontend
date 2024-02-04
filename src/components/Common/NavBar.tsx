import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Collapse, Typography, Button, IconButton } from '@material-tailwind/react';

import logo from '@assets/image/logo.png';
import teamLogo from '@assets/image/logo-team-love-three.png';
import { logout } from '@/api/LoginAPI';
import useModal from '@hooks/useModal.tsx';
import { NAVBAR_MODAL_CONTENT_TYPE } from '@util/Constants/constants.ts';
import ProfileEdit from '@components/Profile/ProfileEdit.tsx';
import TeamSetting from '@components/Team/TeamSetting.tsx';
import useGenerateReport from '@hooks/useGenerateReport.ts';


export function NavBar(props: any) {
  const userId = localStorage.getItem('userId') as string;
  const name = localStorage.getItem('userName');
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const [mode, setMode] = useState('user');

  const changeColor = () => {
    if (mode === 'Team') {
      document.documentElement.style.backgroundColor = 'white';
    } else if (mode === 'user') {
      document.documentElement.style.backgroundColor = '#F5FFEC';
    }
  };

  const modifyMode = () => {
    if (mode === 'user') {
      setMode('Team');
    } else if (mode === 'Team') {
      setMode('user');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const onClickLogout = async () => {
    const isLogout = await logout();

    if (isLogout) {
      localStorage.setItem('userId', '');
      navigate('/');
    }
  };

  // 모달 기능
  const { openModal } = useModal();
  const getModalContent = (type: string) => {
    switch (type) {
      case NAVBAR_MODAL_CONTENT_TYPE.MYPAGE:
        return <ProfileEdit name={String(name)} />;
      case NAVBAR_MODAL_CONTENT_TYPE.TEAM:
        return <TeamSetting />;
    }
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant ="h6"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-semibold"
      >
        <img src='./free-icon-font-apps-3917618 (1).png'/>
        <button
          onClick={() => {
            navigate('/board');
          }}
          className="flex items-center"
        >
          TIL 보러가기
        </button>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 semibold"
      >
        <button
          onClick={() => {
            useGenerateReport(Number(userId));
            navigate('/loading');
          }}
        >
          가이드라인
        </button>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 semibold"
      >
        <button
          onClick={() => {
            openModal({ children: getModalContent(NAVBAR_MODAL_CONTENT_TYPE.MYPAGE) });
          }}
        >
          마이페이지
        </button>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 semibold"
      >
        <i className="fi fi-rr-apps"></i>
        <button
          onClick={() => {
            openModal({ children: getModalContent(NAVBAR_MODAL_CONTENT_TYPE.TEAM) });
          }}
        >
          팀 설정
        </button>
      </Typography>
    </ul>
  );

  return (
    <Navbar fullWidth={true} className="mx-auto px-4 py-2 lg:px-8 lg:py-4">
      <div className="w-full flex items-center justify-between text-blue-gray-900">
        <button
          className="flex flex-row gap-x-3"
          onClick={() => {
            window.location.replace('/');
          }}
        >
          {mode === 'user' ? (
            <>
              <img src={logo} alt="메인로고" className="w-12" />
              <Typography color="amber" className="self-center text-4xl font-extrabold">
                티.나.끝
              </Typography>
            </>
          ) : (
            <>
              <img src={teamLogo} alt="메인로고" className="w-12" />
              <Typography color="green" className="self-center text-4xl font-extrabold">
                팀.나.끝
              </Typography>
            </>
          )}
        </button>

        <div className="hidden lg:block">{navList}</div>
        
        <div className="flex items-center gap-x-1">
          {mode === 'user' ? (
            <Button
              variant="gradient"
              className="hidden lg:inline-block"
              color="green"
              id="modeButton"
              onClick={() => {
                props.flipCard();
                setTimeout(() => {
                  changeColor();
                  modifyMode();
                }, 200);
              }}
            >
              팀으로 전환
            </Button>
          ) : (
            <Button
              variant="gradient"
              className="hidden lg:inline-block"
              color="yellow"
              id="modeButton"
              onClick={() => {
                props.flipCard();
                setTimeout(() => {
                  changeColor();
                  modifyMode();
                }, 200);
              }}
            >
              유저로 전환
            </Button>
          )}

          <Button
            variant="outlined"
            color="blue-gray"
            className="hidden lg:inline-block"
            onClick={onClickLogout}
          >
            <span>로그아웃</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="outlined"
              size="sm"
              color="blue-gray"
              onClick={onClickLogout}
              className=""
            >
              <span>로그아웃</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
