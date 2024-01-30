import { useParams } from 'react-router-dom';
import NavBar from '@/components/Common/NavBar';
import { BoardType } from '@/types/board/BoardType';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BoardDetail = () => {
  let { id } = useParams();

  const [content,setContent] = useState('');
 

  useEffect(() => {
    axios
      .get('http://localhost:3000/board/find')
      .then((response) => {
        const cardList = response.data;
        if (typeof id ==='string') {
          const selectedCard: BoardType = cardList.find(
            (card: BoardType) => card.id === parseInt(id as string, 10),
          );
          setContent(selectedCard.contents);
        } else {
          console.log('해당 id의 카드를 찾을 수 없습니다.');
        }
      })
      .catch(() => {
        console.log('실패');
      });
  }, []);

  // id를 이용하여 필요한 데이터를 가져오거나 렌더링
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="mx-auto contents-container">
      <MDEditor.Markdown
		source={content}
    />
      </div>
    </div>
  );
};

export default BoardDetail;
