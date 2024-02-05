import API_PATH from '@/util/apiPath';
import interceptor from '@api/fetchInterceptor.ts';

export const getUserGrass = async (userId: number, date: Date) => {
  try {
    const response = await interceptor(API_PATH.Grass.user(userId, date), {
      credentials: 'include',
    });
    const userGrass = await response.json();
    return userGrass;
  } catch (error) {
    console.error('개인 잔디 정보를 찾는데 실패했습니다.', error);
  }
};

export const getTeamGrass = async (userId: number, date: Date) => {
  try {
    const response = await interceptor(API_PATH.Grass.team(userId, date), {
      credentials: 'include',
    });
    const teamGrass = await response.json();
    return teamGrass;
  } catch (error) {
    console.error('팀 잔디 정보를 찾는데 실패했습니다.', error);
  }
};
