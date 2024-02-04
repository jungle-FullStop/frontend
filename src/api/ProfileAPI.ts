import API_PATH from '@util/apiPath';
import interceptor from '@api/fetchInterceptor.ts';

export const getProfile = async (userId: number) => {
  try {
    const response = await interceptor(API_PATH.USER.userProfile(userId), {
      credentials: 'include',
    });
    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('프로필 불러오기에 실패했습니다.', error);
    return null;
  }
};

export const updateProfile = async (userId: number, formData: FormData) => {
  try {
    const response = await interceptor(API_PATH.USER.userProfile(userId), {
      method: 'PATCH',
      credentials: 'include',
      body: formData,
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
  } catch (error) {
    console.error('프로필 변경에 실패했습니다.', error);
  }
};
