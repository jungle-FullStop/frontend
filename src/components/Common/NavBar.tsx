import { NavLink } from 'react-router-dom';

import logo from '@assets/image/logo.png';

const NavBar = () => {
  return (
    <div className="w-full">
      <div className="border-brown mb-6 hidden h-[110px]  w-full min-w-[590px] items-center justify-between border-b-[1px] border-solid bg-[#E4EEE8] sm:flex">
        <NavLink to="/" className="ml-[5%]">
          <img src={logo} alt="메인로고" className="w-24" />
        </NavLink>
        NavBar입니다!
      </div>
    </div>
  );
};

export default NavBar;
