import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingCircle from '@/components/Loading/LoadingCircle';
import { Button } from '@material-tailwind/react';
import { WAITING_TIME } from '@/util/Constants/constants';
import { findReport } from '@/api/ReportAPI';

const LoadingButton = () => {
  const navigate = useNavigate();
  const [componentType, setComponentType] = useState('button');
  const [timer, setTimer] = useState(WAITING_TIME);
  const getReport = async () => {
    const report = await findReport();
    localStorage.setItem('todayReport', report?.report);
    navigate('/edit');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      // 타이머가 0이 되면 컴포넌트 유형을 변경합니다.
      setComponentType('');
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <>
      {componentType === 'button' ? (
        <div className="pe-5">
          <LoadingCircle />
        </div>
      ) : (
        <Button
          color="amber"
          className="text-center text-2xl font-bold "
          onClick={() => {
            getReport();
          }}
        >
          가이드라인 보러가기
        </Button>
      )}
      {timer > 0}
    </>
  );
};

export default LoadingButton;
