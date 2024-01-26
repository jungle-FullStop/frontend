import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar, Collapse, Typography, Button, IconButton } from '@material-tailwind/react';

import logo from '@assets/image/logo.png';
import { logout } from '@api/Login.ts';

export function NavBar(props : any) {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const onClickLogout = async () => {
    const isLogout = await logout();

    if (isLogout) {
      localStorage.setItem('userId', '');
      navigate('/');
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    </ul>
  );

  return (
    <Navbar className="mx-auto w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink className="flex flex-row gap-x-3" to="/">
          <img src={logo} alt="메인로고" className="w-10" />
          <Typography color="amber" className="self-center text-2xl font-extrabold">
            티.나.끝
          </Typography>
        </NavLink>

        <div className="flex items-center gap-x-1">
          <Button variant="gradient" size="sm" className="hidden lg:inline-block" color="amber"  onClick={onClickLogout}>
            <span>logout</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              color="amber"
              className=""
              onClick={onClickLogout}
            >
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
