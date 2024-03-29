import { Animation } from '@components/Animation.tsx';

export const Slogan = (props: any) => {
  return (
    <div className={'slogan-container'}>
      <div className={`TILFont text-${props.color}-900`}>
        <p
          className={`mb-3 inline-block bg-gradient-to-r from-${props.color}-300 to-white text-3xl`}
        >
          <span className="text-6xl">TIL</span>을 쓰지 않으면
        </p>
        <div></div>
        <p className={`inline-block bg-gradient-to-r from-${props.color}-300 to-white text-3xl`}>
          <span className="text-6xl">나</span>의 하루는 <span className="text-6xl">끝</span>
          나지 않는다.
        </p>
        <p className="text-lg">TIL이란 ? Today I Learned !</p>
      </div>
      <Animation />
    </div>
  );
};
