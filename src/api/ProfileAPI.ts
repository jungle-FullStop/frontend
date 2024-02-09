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

// 아래 코드 싹다 지우고 다시 구현해야함. 배포할 때 오류 생겨서 임시로 박아놓음
export const updateProfile = async (userId: number, formData: any) => {
  // 구현 내용
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
