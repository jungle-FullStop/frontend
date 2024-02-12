import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { pageMode, todayState } from '@/store/Store';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NAVBAR_MODAL_CONTENT_TYPE } from '@util/Constants/constants.ts';
import useModal from '@hooks/useModal.tsx';
import UserDetail from '@components/Profile/UserDetail.tsx';
import TeamSetting from '@components/Team/TeamSetting.tsx';
import useGenerateReport from '@hooks/useGenerateReport.ts';

export const WriteTIL = (props: any) => {
  const navigate = useNavigate();
  const todayWrite = useRecoilValue(todayState);
  const teamCode = localStorage.getItem('teamCode') as string;

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

  const [mode, setMode] = useRecoilState(pageMode);
  const modifyMode = () => {
    if (mode === 'user') {
      setMode('Team');
    } else if (mode === 'Team') {
      setMode('user');
    }
  };

  const {
    handlers: { generateReport },
  } = useGenerateReport();

  return (
    <div className={'write-container'}>
      <p className="TTLFont mb-5 text-center text-2xl font-bold">
        {todayWrite ? '오늘 하루 수고하셨습니다 !' : '아직 TIL을 작성하지 않으셨나요?'}
      </p>
      {todayWrite ? (
        <Button
          className={`mx-auto w-full rounded-full ${mode === 'user' ? 'bg-yellow-900' : 'bg-green-900'} px-4 py-2 text-2xl font-bold text-white`}
          onClick={handleMode}
        >
          {mode === 'user' ? '팀 텃밭 보러가기' : '내 텃밭 보러가기'}
        </Button>
      ) : (
        <Button
          className={`bg-${props.color}-900 mx-auto w-full rounded-full px-4 py-2 text-2xl font-bold text-white`}
          onClick={() => {
            generateReport();
            navigate('/loading');
          }}
        >
          TIL 작성하기
        </Button>
      )}
    </div>
  );
};
