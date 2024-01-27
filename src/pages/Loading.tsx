import NavBar from '@components/Common/NavBar';
import ProgressBar from '@components/Loading/ProgressBar';
import Mindmap from '@/components/Common/Mindmap';
import { Typography } from '@material-tailwind/react';
import LoadingButton from '@components/Loading/LoadingButton';

const Loading = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="sub-container">
        <div className="flex flex-col items-center">
          <Typography className="container place-self-start pb-2 text-3xl font-extrabold">
            오늘의 검색 키워드
          </Typography>
          <Mindmap />
          <div className="container flex items-center justify-center gap-x-3 p-5">
            <ProgressBar />
            <LoadingButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
