import API_PATH from '@util/apiPath';

import interceptor from '@api/fetchInterceptor';

export const getHistroyList = async (keyword: string) => {
  try {
    const response = await interceptor(API_PATH.HISTROY.search(keyword), {
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    console.log('검색기록 조회에 실패했습니다.', error);
  }
};
