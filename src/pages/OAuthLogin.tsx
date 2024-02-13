import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { googleLogin } from '@/api/LoginAPI';
import { getProfile } from '@api/ProfileAPI.ts';
import { getTeamProfile } from '@api/TeamAPI.ts';
import { Profile } from '@type/Profile.ts';

const AuthLogin = () => {
  const getUserId = async () => {
    const code = new URL(window.location.href).searchParams.get('code') ?? '';
    // const state = new URL(window.location.href).searchParams.get('state') ?? '';
    const userId = await googleLogin(code);
    const profile: Profile = await getProfile(userId);
    const teamProfile = await getTeamProfile(profile.teamCode);

    // 유저 정보
    localStorage.setItem('userId', userId);
    localStorage.setItem('email', profile.email);
    localStorage.setItem('userName', profile.name);
    localStorage.setItem('userProfileImage', profile.profileImage);
    localStorage.setItem('userCreateAt', profile.createdAt);
    localStorage.setItem('tilScore', String(profile.tilScore));

    // 팀 정보
    if (teamProfile) {
      localStorage.setItem('teamId', teamProfile.id);
      localStorage.setItem('teamCode', teamProfile.code);
      localStorage.setItem('teamName', teamProfile.name);
      localStorage.setItem('teamDescription', teamProfile.description);
      localStorage.setItem('teamCreateAt', teamProfile.createdAt);
    } else {
      localStorage.setItem('teamCode', 'default');
      localStorage.setItem('teamName', '티.나.끝');
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    getUserId().then(() => navigate('/home'));
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center gap-5">
      <p>Loading...</p>
      <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
    </div>
  );
};

export default AuthLogin;
