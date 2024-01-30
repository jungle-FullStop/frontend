import API_PATH from '@util/apiPath';

export const googleLogin = async (code: string) => {
  try {
    const response = await fetch(API_PATH.AUTH.login(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        code,
        socialType: 'google',
      }),
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const { id, email } = await response.json();
    console.log(`id : ${id} email : ${email}`)
    return id;
  } catch (error) {
    console.error('로그인에 실패했습니다.', error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch(API_PATH.AUTH.logout(), {
      method: 'POST',
      credentials: 'include',
    });
    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    return response.ok;
  } catch (error) {
    console.error('로그아웃에 실패했습니다.', error);
  }
};

export const refresh = async () => {
  try {
    const response = await fetch(API_PATH.AUTH.updateToken(), {
      credentials: 'include',
    });
    return response;
  } catch (error) {
    console.error('토큰 갱신에 실패했습니다.', error);
  }
};
