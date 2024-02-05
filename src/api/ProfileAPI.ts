import API_PATH from '@util/apiPath';
import interceptor from '@api/fetchInterceptor.ts';

export const getProfile = async (userId: number) => {
  try {
    const response = await interceptor(API_PATH.USER.userProfile(userId), {
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.error('프로필 불러오기에 실패했습니다.', error);
    return null;
  }
};
