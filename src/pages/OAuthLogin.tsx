import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { googleLogin } from '@api/Login';


const AuthLogin = () => {
  const getUserId = async () => {
    const code = new URL(window.location.href).searchParams.get('code') ?? '';
    // const state = new URL(window.location.href).searchParams.get('state') ?? '';
    const userId = await googleLogin(code);
    localStorage.setItem('userId', userId);
    navigate('/');
  };

  const navigate = useNavigate();
  useEffect(() => {
    getUserId();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center gap-5">
      <p>Loading...</p>
      <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
    </div>
  );
};

export default AuthLogin;
