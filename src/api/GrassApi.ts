import API_PATH from '@/util/apiPath';
import interceptor from '@api/fetchInterceptor.ts';

export const getUserGrass = async (date: Date) => {
  try {
    const response = await interceptor(API_PATH.Grass.user(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date: date }),
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.error('개인 잔디 정보를 찾는데 실패했습니다.', error);
  }
};

export const getTeamGrass = async (date: Date) => {
  try {
    const response = await interceptor(API_PATH.Grass.team(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date: date }),
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.error('팀 잔디 정보를 찾는데 실패했습니다.', error);
  }
};
