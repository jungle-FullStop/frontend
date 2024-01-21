import NavBar from '@components/Common/NavBar';
import ProgressBar from '@components/Loading/ProgressBar';
import Graph from '@components/Common/Graph';
import { Typography } from '@material-tailwind/react';
import LoadingButton from '@components/Loading/LoadingButton';

const Loading = () => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <NavBar />
      <div className="flex flex-col items-center">
        <Typography className="container text-left text-3xl font-extrabold py-2">
          오늘의 검색 키워드
        </Typography>
        <Graph />
        <div className="flex items-center gap-x-10 p-5">
          <ProgressBar />
          <LoadingButton />
        </div>
      </div>
    </div>
  );
};

export default Loading;
