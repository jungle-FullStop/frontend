import { GOOGLE_LOGIN_FORM_URL } from '@/util/Constants/constants';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export const LoginButton = () => {
  return (
    <div id="googleLoginButton" className="flex flex-col justify-end p-0">
      <Link to={GOOGLE_LOGIN_FORM_URL}>
        <Button
          size="lg"
          color="white"
          className="flex w-72 items-center border-2 border-solid shadow-lg"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Google 계정으로 로그인하기
        </Button>
      </Link>
    </div>
  );
};
