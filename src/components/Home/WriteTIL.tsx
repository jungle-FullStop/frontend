import { createReport } from '@/api/ReportAPI';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { todayState, todayTILState } from '@/store/Store';
import { useRecoilValue, } from 'recoil';

export const WriteTIL = (props: any) => {
  
  const todayWrite = useRecoilValue(todayState)
  const todayTILPage = useRecoilValue(todayTILState)
  const navigate = useNavigate();


  const generateReport = () => {
    createReport();
    document.documentElement.style.backgroundColor = '#FFFFE6';
    if(todayState){
      navigate(`/board/${todayTILPage}`)
    }else{
      navigate('/loading');
    }
  };

  return (
    <div className="contents-container">
      <p className="text-center text-2xl font-bold">{todayWrite ? 'TIL을 작성하셨군요 !' : '아직 TIL을 작성하지 않으셨나요?'}</p>
      <Button
        className={`bg-${props.color}-600 rounded-full px-4 py-2 text-2xl font-bold text-white`}
        onClick={generateReport}
      >
        {todayWrite ? 'TIL 보러가기' : 'TIL 작성하기'}
      </Button>
    </div>
  );
};
