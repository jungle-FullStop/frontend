import { refresh } from '@api/LoginAPI';

import { PAGE_URL } from '@util/Constants/constants';

const interceptor = async (url: string, option: any) => {
  let response = await fetch(url, option);

  if (response.status !== 401) return response;

  const refreshResponse = await refresh();

  if (refreshResponse?.status === 401 || refreshResponse?.status === 500) {
    localStorage.clear();
    window.location.href = PAGE_URL.LANDING;
    return refreshResponse;
  }

  response = await fetch(url, option);
  return response;
};

export default interceptor;
