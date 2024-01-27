import NavBar from '@components/Common/NavBar';
import ProgressBar from '@components/Loading/ProgressBar';
import Mindmap from '@/components/Loading/Mindmap';
import LoadingButton from '@components/Loading/LoadingButton';
import { Typography } from '@material-tailwind/react';

const Loading = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="sub-container">
        <div className="flex flex-col items-center">
          <div className="container flex items-center justify-center gap-x-3">
            <ProgressBar />
            <LoadingButton />
          </div>
        </div>
      </div>
      <Mindmap />
      <Typography className="p-2 text-right text-4xl font-extrabold">오늘의 검색 키워드</Typography>
    </div>
  );
};

export default Loading;
