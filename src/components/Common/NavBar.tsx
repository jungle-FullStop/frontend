import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Collapse, Typography, Button, IconButton } from '@material-tailwind/react';

import logo from '@assets/image/logo.png';
import teamLogo from '@assets/image/logo-team.png';
import { logout } from '@/api/LoginAPI';
import useModal from '@hooks/useModal.tsx';
import { NAVBAR_MODAL_CONTENT_TYPE } from '@util/Constants/constants.ts';
import TeamSetting from '@components/Team/TeamSetting.tsx';
import UserDetail from '@components/Profile/UserDetail.tsx';
import useGenerateReport from '@hooks/useGenerateReport.ts';
import settingLogo from '@assets/image/settingLogo.png';
import myPage from '@assets/image/myPage.png';
import edit from '@assets/image/edit.png';
import storage from '@assets/image/storage.png';
import { pageMode, todayState } from '@/store/Store';
import { useRecoilState, useRecoilValue } from 'recoil';

export function NavBar(props: any) {
  const todayWrite = useRecoilValue(todayState);

  const teamCode = localStorage.getItem('teamCode') as string;
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const [mode, setMode] = useRecoilState(pageMode);

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
      case NAVBAR_MODAL_CONTENT_TYPE.DETAIL:
        return <UserDetail />;
      case NAVBAR_MODAL_CONTENT_TYPE.TEAM:
        return <TeamSetting />;
    }
  };

  const handleMode = () => {
    if (teamCode === 'default') {
      alert('팀에 가입해야 사용할 수 있습니다.');
      return openModal({ children: getModalContent(NAVBAR_MODAL_CONTENT_TYPE.TEAM) });
    }
    props.flipCard();
    setTimeout(() => {
      modifyMode();
    }, 200);
  };

  const [throttled, setThrottled] = useState(false);
  const handleModeClick = (fn: Function) => {
    if (!throttled) {
      // 함수 실행
      fn();

      // 쓰로틀링 상태로 변경
      setThrottled(true);

      // 일정 시간(예: 1초) 후에 쓰로틀링 상태를 해제합니다.
      setTimeout(() => {
        setThrottled(false);
      }, 1000); // 5초
    }
  };
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-semibold"
      >
        <img src={storage} alt={'TIL 저장소'} className="w-5"></img>
        <button
          onClick={() => {
            navigate('/board');
          }}
          className="flex items-center"
        >
          TIL 저장소
        </button>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="semibold flex items-center gap-x-2 p-1"
      >
        <img src={edit} alt={'TIL 작성'} className="w-6"></img>
        <button
          onClick={() => {
            if (todayWrite) {
              useGenerateReport().then(r => console.log('수정필요'));
              navigate('/loading');
            } else {
              window.alert('아직 오늘의 TIL을 작성하지 않았습니다.');
            }
          }}
        >
          TIL 작성
        </button>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="semibold flex items-center gap-x-2 p-1"
      >
        <img src={myPage} alt={'마이페이지'} className="w-5"></img>
        <button
          onClick={() => {
            openModal({ children: getModalContent(NAVBAR_MODAL_CONTENT_TYPE.DETAIL) });
          }}
        >
          마이페이지
        </button>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="semibold flex items-center gap-x-2 p-1"
      >
        <img src={settingLogo} alt={'팀 설정'} className="w-5"></img>
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
    <Navbar fullWidth={true} className="z-50 mx-auto py-2 lg:px-8 lg:py-4 ">
      <div className="flex w-full items-center justify-between text-blue-gray-900">
        <button
          className="flex flex-row gap-x-3"
          onClick={() => {
            window.location.replace('/');
          }}
        >
          {mode === 'user' ? (
            <>
              <img src={logo} alt="메인로고" className="w-12" />
              <Typography color="amber" className="self-center text-3xl font-extrabold">
                티.나.끝
              </Typography>
            </>
          ) : (
            <>
              <img src={teamLogo} alt="메인로고" className="w-12" />
              <Typography color="green" className="self-center text-3xl font-extrabold">
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
              onClick={() => handleModeClick(handleMode)}
            >
              팀으로 전환
            </Button>
          ) : (
            <Button
              variant="gradient"
              className="hidden lg:inline-block"
              color="yellow"
              id="modeButton"
              onClick={() => handleModeClick(handleMode)}
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
