import { useState } from 'react';
import NavBar from '@components/Common/NavBar';
import ProgressBar from '@components/Loading/ProgressBar';
import { Mindmap } from '@/components/Loading/Mindmap';
import LoadingButton from '@components/Loading/LoadingButton';
import { Button, Typography } from '@material-tailwind/react';

const Loading = () => {
  const [layout, setLayout] = useState('fcose');

  return (
    <div className="main-container">
      <NavBar />

      <div className=" flex mb-5 flex-wrap items-center justify-between pt-3">
        <div className="w-2/3">
          <ProgressBar />
        </div>
        <div className='h-14'>
          <LoadingButton />
        </div>
      </div>

      <Mindmap name={layout} />
      

        <div className="flex flex-row gap-x-3">
          <Button
            variant="outlined"
            size="sm"
            className="inline text-lg font-light"
            onClick={() => {
              setLayout('fcose');
            }}
          >
            마인드맵
          </Button>
          <Button
            variant="outlined"
            size="sm"
            className="inline text-lg font-light"
            onClick={() => {
              setLayout('circle');
            }}
          >
            원형
          </Button>
          <Button
            variant="outlined"
            size="sm"
            className="inline text-lg font-light"
            onClick={() => {
              setLayout('grid');
            }}
          >
            그리드
          </Button>
          <Button
            variant="outlined"
            size="sm"
            className="inline text-lg font-light"
            onClick={() => {
              setLayout('breadthfirst');
            }}
          >
            트리
          </Button>
        </div>
        <Typography className="text-right text-4xl font-extrabold">키워드 마인드맵</Typography>
      </div>
  );
};

export default Loading;
