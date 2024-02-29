import { Header } from '@components/Landing/Header';
import { LandingMain } from '@/components/Landing/LandingMain';
import { LoginButton } from '@/components/Landing/LoginButton';
import HeroImage from '@/assets/image/heroImage.png';

const Landing = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <div className="mx-auto flex w-[75%] flex-grow items-center justify-between">
        <div id="Main" className="flex flex-col">
          <LandingMain />
          <LoginButton />
        </div>
        <div className={'w-[45%]'}>
          <img src={HeroImage} alt="landing" />
        </div>
      </div>
      <div className={'mx-auto mb-10 flex flex-row items-center'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className={'landing-arrow mr-3 w-10'}
        >
          <path
            d="M28.109 8.001h7.132v34.626l11.063-11.069 5.038 5.04-19.667 19.674L12 36.601l5.046-5.043 11.063 11.069Zm5.654 1.478h-4.176v36.717L17.045 33.652l-2.954 2.95 17.584 17.58 17.577-17.581-2.948-2.949-12.541 12.544Z"
            fill={'#ff9800'}
          />
        </svg>
        <p className="w-[175px] text-center text-2xl font-bold text-orange-500">
          티.나.끝 서비스는?
        </p>
      </div>
    </div>
  );
};

export default Landing;
