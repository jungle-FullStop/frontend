import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingCircle from '@/components/Loading/LoadingCircle';
import { Button } from '@material-tailwind/react';
import { WAITING_TIME } from '@util/constants';

const LoadingButton = () => {
  const navigate = useNavigate();
  const [componentType, setComponentType] = useState('button');
  const [timer, setTimer] = useState(WAITING_TIME);

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
    <div>
      {componentType === 'button' ? (
        <LoadingCircle />
      ) : (
        <Button
          color="amber"
          className="text-lg font-bold"
          onClick={() => {
            navigate('/edit');
          }}
        >
          가이드라인 보러가기
        </Button>
      )}
      {timer > 0}
    </div>
  );
};

export default LoadingButton;
