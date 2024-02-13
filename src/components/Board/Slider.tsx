import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useFindUserBoard } from '@/hooks/useFindUserBoard';
import { CardDefault } from './CardDefault';
import { useCallback, useState } from 'react';

function MultipleItems() {
  const navigate = useNavigate();
  const [dragging, setDragging] = useState<boolean>(false);
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, []);
  const handleAfterChange = useCallback((i: number) => {
    setDragging(false);
  }, []);

  const { userImage, userName, cardList } = useFindUserBoard();
  console.log(cardList)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: true,
    touchThreshold : 100,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardList
          ? cardList.map((data: any, items: number) => {
              return (
                <div
                  className="TIL shadow-base"
                  key={items}
                  onClick={() => {
                    navigate(`/board/${data.id}`);
                  }}
                >
                  <CardDefault
                    cardTitle={data.title}
                    cardContents={data.contents}
                    cardDate={data.timestamp}
                    userImage={userImage}
                    userName={userName}
                  />
                </div>
              );
            })
          : null}
      </Slider>
    </div>
  );
}

export default MultipleItems;
