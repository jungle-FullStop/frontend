import { useParams } from 'react-router-dom';
import NavBar from '@/components/Common/NavBar';
import MDEditor from '@uiw/react-md-editor';
import anonymousImage from '@assets/image/anonymousImage.png';
import { useFindBoardDetail } from '@hooks/useFindBoardDetail.ts';

const BoardDetail = () => {
  const { id } = useParams();
  const { userImage, title, content, beforeTime } = useFindBoardDetail(id);

  return (
    <div className="main-container">
      <NavBar />
      <div className="mx-auto mb-5 mt-5 flex w-[90%] flex-row items-end">
        <img
          className="mr-5 h-10 w-10 rounded-full object-cover object-center"
          src={userImage ? userImage : anonymousImage}
          alt="nature image"
        />
        <p className={'pr-5 text-3xl font-bold'}> {title}</p>
        <p className={'text-lg'}> 작성 {beforeTime}</p>
      </div>
      <div className="mx-auto w-[90%] border-4 border-gray-300 p-5">
        <div data-color-mode="light ">
          <MDEditor.Markdown source={content} />
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
