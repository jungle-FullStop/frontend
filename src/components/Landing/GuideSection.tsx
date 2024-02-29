import MindmapImage from '@assets/image/TilMindmap.png';
import GuidelineImage from '@assets/image/TilGuideline.png';
import GardenImage from '@assets/image/TilGarden.png';

const GuideSection = () => {
  return (
    <>
      <div className={'py-[100px]'}>
        <div className="mx-auto flex w-[90%] flex-grow items-center justify-between">
          <div className={'w-[50%]'}>
            <img src={MindmapImage} alt="마인드맵" />
          </div>
          <div className={'w-[40%]'}>
            <p className={'text-center text-4xl font-bold text-black'}>
              <span className={'text-orange-500'}>키워드 마인드맵</span>과 함께 <div />
              오늘 하루를 리마인드해보세요!
            </p>
          </div>
        </div>
      </div>
      <div className={'py-[100px]'}>
        <div className="mx-auto flex w-[90%] flex-grow items-center justify-between">
          <div className={'w-[40%]'}>
            <p className={'text-center text-4xl font-bold text-black'}>
              <span className={'text-orange-500'}>TIL 가이드라인</span>과 함께 <div /> 더 쉽고
              빠르게 TIL을 작성해보세요!
            </p>
          </div>
          <div className={'w-[50%]'}>
            <img src={GuidelineImage} alt="가이드라인" />
          </div>
        </div>
      </div>
      <div className={'py-[100px]'}>
        <div className="mx-auto flex w-[90%] flex-grow items-center justify-between">
          <div className={'w-[50%]'}>
            <img src={GardenImage} alt="팀 텃밭" />
          </div>
          <div className={'w-[40%]'}>
            <p className={'text-center text-4xl font-bold text-black'}>
              <span className={'text-orange-500'}>팀 TIL 텃밭</span>과 함께 <div />
              재미있게 TIL을 작성해보세요!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideSection;
