import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { todayState, todayTILState } from '@/store/Store';
import { useRecoilValue } from 'recoil';
import useGenerateReport from '@hooks/useGenerateReport.ts';

export const WriteTIL = (props: any) => {
  const navigate = useNavigate();
  const todayWrite = useRecoilValue(todayState);
  const todayTILPage = useRecoilValue(todayTILState);

  return (
    <div className={'write-container'}>
      <p className="TTLFont mb-5 text-center text-2xl font-bold">
        {todayWrite ? 'TIL을 작성하셨군요 !' : '아직 TIL을 작성하지 않으셨나요?'}
      </p>
      {todayWrite ? (
        <Button
          className={`bg-${props.color}-600 mx-auto w-44  rounded-full px-4 py-2 text-xl font-bold text-white`}
          onClick={() => navigate(`/board/${todayTILPage}`)}
        >
          TIL 보러가기
        </Button>
      ) : (
        <Button
          className={`bg-${props.color}-600 mx-auto w-60 rounded-full px-4 py-2 text-2xl font-bold text-white`}
          onClick={() => {
            useGenerateReport();
            navigate('/loading');
          }}
        >
          TIL 작성하기
        </Button>
      )}
    </div>
  );
};
