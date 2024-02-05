import { useEffect, useState } from 'react';
import NavBar from '@components/Common/NavBar';
import { Mindmap } from '@components/Loading/Mindmap/Mindmap.tsx';
import LoadingButton from '@components/Loading/LoadingButton';
import { Button, ButtonGroup } from '@material-tailwind/react';

const Loading = () => {
  const [layout, setLayout] = useState('fcose');


  useEffect(()=>{
    setTimeout(() => {
      setLayout('circle');
    }, 1500);
    setTimeout(() => {
      setLayout('grid');
    }, 3000);
    setTimeout(() => {
      setLayout('fcose');
    }, 5000);
  },[])
  

  return (
    <div className="main-container">
      <NavBar />
      <div></div>
      <div className=" mx-auto mb-5 mt-5 flex w-[90%] items-center justify-between last:py-3">
        <div className="">
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
        </div>
        <div>
          {/* <p className="text-right text-4xl font-extrabold">키워드 마인드맵</p> */}
        </div>
        <div>
          <LoadingButton />
        </div>
      </div>

      <Mindmap name={layout} />
    </div>
  );
};

export default Loading;
