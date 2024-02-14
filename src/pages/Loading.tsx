import { useEffect, useState } from 'react';
import NavBar from '@components/Common/NavBar';
import { Mindmap } from '@components/Loading/Mindmap/Mindmap.tsx';
import LoadingButton from '@components/Loading/LoadingButton';
import { Button, ButtonGroup } from '@material-tailwind/react';
import Modal from '@components/Common/Modal.tsx';

const Loading = () => {
  const [layout, setLayout] = useState('fcose');

  useEffect(() => {
    const delay = (sec: number) => new Promise((resolve) => setTimeout(resolve, sec));

    const updateLayout = async () => {
      await delay(1300);
      setLayout('circle');
      await delay(700);
      setLayout('grid');
      await delay(1000);
      setLayout('breadthfirst');
      await delay(700);
      setLayout('fcose');
    };

    updateLayout();
  }, []);

  return (
    <div className="main-container">
      <NavBar />
      <div className="loading-container">
        <ButtonGroup variant="outlined">
          <Button
            onClick={() => {
              setLayout('fcose');
            }}
          >
            <p className="text-base"> 마인드맵</p>
          </Button>
          <Button
            onClick={() => {
              setLayout('circle');
            }}
          >
            <p className="text-base">원형</p>
          </Button>
          <Button
            onClick={() => {
              setLayout('grid');
            }}
          >
            <p className="text-base">그리드</p>
          </Button>
          <Button
            onClick={() => {
              setLayout('breadthfirst');
            }}
          >
            <p className="text-base">트리</p>
          </Button>
        </ButtonGroup>
        <LoadingButton />
      </div>
      <Mindmap name={layout} />
      <Modal />
    </div>
  );
};

export default Loading;
