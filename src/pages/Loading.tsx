import { useState } from 'react';
import NavBar from '@components/Common/NavBar';
import { Mindmap } from '@components/Loading/Mindmap/Mindmap.tsx';
import LoadingButton from '@components/Loading/LoadingButton';
import { Button } from '@material-tailwind/react';

const Loading = () => {
  const [layout, setLayout] = useState('fcose');

  return (
    <div className="main-container">
      <NavBar />
      <div className="flex flex-wrap items-center justify-end py-3">
        <div className="h-14">
          <LoadingButton />
        </div>
      </div>

      <Mindmap name={layout} />
      <div className={'flex flex-row place-content-between pt-1'}>
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
        <p className="text-right text-4xl font-extrabold">키워드 마인드맵</p>
      </div>
    </div>
  );
};

export default Loading;
