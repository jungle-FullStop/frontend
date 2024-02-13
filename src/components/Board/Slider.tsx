import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useFindUserBoard } from '@hooks/Board/useFindUserBoard.ts';
import { CardDefault } from './CardDefault';
import { useCallback, useState } from 'react';
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

  // const sortedData = [...data.boards].sort((a, b) => a.id - b.id)
  // console.log(sortedData)

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
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: true,
    touchThreshold : 100,
    // rtl: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        { data.boards.length > 0
          ?  (data.boards.map((boards: any, items: number) => {
              return (
                <div
                  className="TIL shadow-base"
                  key={items}
                  onClick={() => {
                    navigate(`/board/${boards.id}`);
                  }}
                >
                  <CardDefault
                    cardTitle={boards.title}
                    cardContents={boards.contents}
                    cardDate={boards.timestamp}
                    userImage={data.user.profileImage}
                    userName={data.user.name}
                  />
                </div>
              );
            }))
          :(
            <div className="mx-auto flex h-[500px] flex-col justify-center gap-y-8">
              <p className="text-5xl font-bold">작성하신 TIL이 없어요.</p>
              <WriteTIL color={'yellow'} />
            </div>
          )}
      </Slider>
    </div>
  );
}

export default SliderCard;
