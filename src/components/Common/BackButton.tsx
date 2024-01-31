import Icon from '@components/Common/Icon.tsx';

const BackButton = () => {
  return (
    <div>
      <button type="button" className={'flex w-fit flex-row items-center'}>
        <Icon id={'leftArrow'} styles="top-2/3 right-[1%]" />
        <p className="text-sm font-bold">뒤로가기</p>
      </button>
    </div>
  );
};

export default BackButton;
