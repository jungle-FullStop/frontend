import API_PATH from '@util/apiPath';

const TEMP_ID = 1;
interface userInfo {
  id: any;
  name: any;
  profileImage: any;
}

export const getProfile = async () => {
  try {
    const response = await fetch(API_PATH.USER.userProfile(TEMP_ID), {
      method: 'GET',
    });
    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const user: userInfo = await response.json();
    return user;
  } catch (error) {
    console.error('프로필 불러오기에 실패했습니다.', error);
  }
};
