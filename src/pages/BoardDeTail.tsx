import { useParams } from 'react-router-dom';
import NavBar from '@/components/Common/NavBar';
import MDEditor from '@uiw/react-md-editor';
import anonymousImage from '@assets/image/anonymousImage.png';
import { useFindBoardDetail } from '@hooks/useFindBoardDetail.ts';
import { Ad } from '@/components/Common/Ad';
import teamspartaAd from '@assets/image/teamspartaAd.png';
import { Footer } from '@/components/Common/Footer';

const BoardDetail = () => {
  const { id } = useParams();
  const { userImage, title, content, beforeTime } = useFindBoardDetail(id);

  return (
    <div className="main-container">
      <NavBar />
      {/* <div className="mx-auto mb-5 mt-5 flex w-[90%] flex-row items-end">
      </div> */}
      <div className="mx-auto w-[60%]  p-5">
        <p className={'mb-10 mt-8 pr-5 text-5xl font-bold text-black'}> {title}</p>
        <div className="flex items-center">
          <div>
            <img
              className="mr-5 h-12 w-12 rounded-full object-cover object-center"
              src={userImage ? userImage : anonymousImage}
              alt="nature image"
            />
          </div>
          <div>
            <p className='text-lg'> 2024년 2월 11일 </p>
          </div>
          <div className="ml-auto font-bold">
            <p className='text-lg'>  작성 {beforeTime}</p>    
          </div>
        </div>
        <img src={teamspartaAd} className='mt-10 mb-20'></img>
      </div>
      <div className="mx-auto w-[60%]">
        <div data-color-mode="light ">
          <MDEditor.Markdown source={content} style={{ fontSize: '23px' }} />
        </div>
      </div>
      <div className='mb-10 mt-10'></div>
      <Footer></Footer>
    </div>
  );
};

export default BoardDetail;
