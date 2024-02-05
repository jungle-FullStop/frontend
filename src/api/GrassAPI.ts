import interceptor from '@api/fetchInterceptor.ts';
import API_PATH from '@util/apiPath.ts';

export const getUserGrass = async (userId: number) => {
  try {
    const response = await interceptor(API_PATH.BOARD.find(userId), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('잔디 조회에 실패했습니다.', error);
    return null;
  }
};

export const getTeamGrass = async (userId: number) => {
  try {
    const response = await interceptor(API_PATH.BOARD.find(userId), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('팀 잔디 조회에 실패했습니다.', error);
    return null;
  }
};
