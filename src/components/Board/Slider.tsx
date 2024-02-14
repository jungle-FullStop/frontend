import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useFindUserBoard } from '@hooks/Board/useFindUserBoard.ts';
import { CardDefault } from './CardDefault';
import { useCallback, useEffect, useState } from 'react';
import { WriteTIL } from '@components/Home/WriteTIL.tsx';
import NavBar from '../Common/NavBar';

function SliderCard() {
  const navigate = useNavigate();
  const [dragging, setDragging] = useState<boolean>(false);
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, []);
  const handleAfterChange = useCallback((i: number) => {
    setDragging(false);
  }, []);

  const { data, isLoading, isError } = useFindUserBoard();
  const [sliderWidth, setSliderWidth] = useState(1340);

  useEffect(() => {
    // data가 비동기적으로 실행되므로 업데이트 되었을 때 실행
    if (!isLoading && !isError && data && data.boards) {
      if (data.boards.length === 1) {
        setSliderWidth(450);
      } else if (data.boards.length === 2) {
        setSliderWidth(900);
      } else {
        setSliderWidth(1340);
      }
    }
  }, [data, isLoading, isError]);


  console.log(data);

  if (isLoading) {
    return (
      <div className="main-container">
        <NavBar />
        <div className="flex h-screen items-center justify-center gap-5">
          <p>TIL 저장소를 불러오는 중...</p>
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="main-container">
        <NavBar />
        <div className="flex h-screen items-center justify-center gap-5">
          <p>TIL 저장소를 불러오지 못했습니다!</p>
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
        </div>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: data.boards.length == 1 ? 1 : data.boards.length == 2 ? 2 : 3,
    slidesToScroll: data.boards.length == 1 ? 1 : data.boards.length == 2 ? 2 : 3,
    arrow: true,
    touchThreshold: 100,
    // variableWidth: true,
    // rtl: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };
  return (
    <>
      {data.boards.length > 0 ? (
        <div className="slider-container" style={{ width: `${sliderWidth}px` }}>
          <Slider {...settings}>
            {data.boards.map((board: any, index: number) => (
              <div
                className="TIL shadow-base"
                key={index}
                onClick={() => {
                  navigate(`/board/${board.id}`);
                }}
              >
                <CardDefault
                  cardTitle={board.title}
                  cardContents={board.contents}
                  cardDate={board.timestamp}
                  userImage={data.user.profileImage}
                  userName={data.user.name}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="mx-auto flex h-[500px] flex-col justify-center gap-y-8">
          <p className="text-5xl font-bold">작성하신 TIL이 없어요.</p>
          <WriteTIL color={'yellow'} />
        </div>
      )}
    </>
  );
}

export default SliderCard;
