import LogoSloganImage from '@assets/image/logoSlogan.png';
import { GOOGLE_LOGIN_FORM_URL } from '@util/Constants/constants.ts';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const StartSection = () => {
  return (
    <div className="flex flex-col items-center py-[100px]">
      <div className={'mx-auto w-[50%] pb-[50px]'}>
        <img src={LogoSloganImage} alt="로고와 슬로건" />
      </div>
      <div className={'pb-[20px]'}>
        <div id="googleLoginButton" className="flex flex-col justify-end p-0">
          <Link to={GOOGLE_LOGIN_FORM_URL}>
            <Button
              size="lg"
              color="amber"
              className="flex w-fit items-center border-2 border-solid px-10 shadow-amber-500/40"
            >
              <p className={'text-center text-4xl font-bold text-white'}>지금 바로 TIL 쓰러가기!</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
