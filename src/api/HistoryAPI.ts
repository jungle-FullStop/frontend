import API_PATH from '@util/apiPath';

import interceptor from '@api/fetchInterceptor';

export const getHistroyList = async (keyword: string) => {
  try {
    const response = await interceptor(API_PATH.HISTROY.search(keyword), {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('검색기록 조회에 실패했습니다.', error);
  }
};
