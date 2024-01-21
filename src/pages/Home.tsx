import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        onClick={() => {
          navigate('/loading');
        }}
      >
        가이드라인 생성
      </Button>
    </div>
  );
};

export default Home;
