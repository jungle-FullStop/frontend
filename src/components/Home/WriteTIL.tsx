import { createReport } from '@/api/ReportAPI';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const WriteTIL = (props: any) => {
  const navigate = useNavigate();

  const generateReport = () => {
    createReport();
    document.documentElement.style.backgroundColor = '#fffef9';
    navigate('/loading');
  };

  return (
    <div className="contents-container">
      <p className="text-center text-2xl font-bold">아직 TIL을 작성하지 않으셨나요?</p>
      <Button
        className={`bg-${props.color}-600 rounded-full px-4 py-2 text-2xl font-bold text-white`}
        onClick={generateReport}
      >
        TIL 작성하기
      </Button>
    </div>
  );
};
