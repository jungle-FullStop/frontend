import { Link } from 'react-router-dom';

import { GOOGLE_LOGIN_FORM_URL } from '@util/constants';

const LoginForm = () => {
  return (
    <div className="border-default relative flex w-full flex-col items-center justify-center gap-9 rounded-2xl bg-white py-16 shadow-[0_0_20px_0_rgba(0,0,0,0.25)] sm:w-1/3">
      <p className="text-default font-bold">GOOGLE 시작</p>
      <Link to={GOOGLE_LOGIN_FORM_URL} className="flex w-1/2 justify-center">
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
      </Link>
    </div>
  );
};

export default LoginForm;
