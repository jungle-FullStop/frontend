import { useParams } from 'react-router-dom';
import NavBar from '@/components/Common/NavBar';
import { BoardType } from '@/types/board/BoardType';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BoardDetail = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [beforeTime, setBeforeTime] = useState<string>();
  const userImage = localStorage.getItem('userProfileImage');

  useEffect(() => {
    axios
      .get('http://localhost:3000/board/find')
      .then((response) => {
        const cardList = response.data;
        if (typeof id === 'string') {
          const selectedCard: BoardType = cardList.find(
            (card: BoardType) => card.id === parseInt(id as string, 10),
          );
          setContent(selectedCard.contents);
          const writeDate = new Date(selectedCard.timestamp);
          const currentDate = new Date();

          // 밀리초로 변환 후 차이 계산
          const timeDifference = currentDate.getTime() - writeDate.getTime();

          // 밀리초를 일로 변환 (1초 = 1000밀리초, 1분 = 60초, 1시간 = 60분, 1일 = 24시간)
          const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

          if (daysDifference >= 1) {
            console.log(`날짜 차이 (일): ${daysDifference}`);
            setBeforeTime(`${daysDifference}일 전`);
          } else {
            const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
            console.log(`몇 시간 전: ${hoursDifference}`);
            setBeforeTime(`${hoursDifference}시간 전`);
          }
        } else {
          console.log('해당 id의 카드를 찾을 수 없습니다.');
        }
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="mb-5 mt-5 flex flex-row items-end">
        <img
          className="mr-5 h-10 w-10 rounded-full object-cover object-center"
          src={userImage as string | undefined}
          alt="nature image"
        />
        <p className={'text-lg'}> 작성 {beforeTime}</p>
      </div>
      <div className="contents-container">
        <div data-color-mode="light">
          <MDEditor.Markdown source={content} />
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
