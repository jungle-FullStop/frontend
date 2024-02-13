import API_PATH from '@/util/apiPath';
import interceptor from './fetchInterceptor';

export const cockPush = async (memberId: string, pusher: string, body?: string | undefined) => {
  try {
    const fetchUrl = API_PATH.PUSH.push();
    const response = await interceptor(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        memberId: memberId,
        title: pusher,
        body: body !== undefined ? body : null,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log('콕 찌르기 실패했습니다.', error);
  }
};

export const saveTokenOnServer = async (id: number, token: string) => {
  try {
    const fetchUrl = API_PATH.PUSH.token();
    await interceptor(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        token: token,
      }),
    });
    // const responseData = await response.json();
    // console.log('Token saved successfully on server:', responseData);
  } catch (error) {
    console.error('Error while saving token on server:', error);
  }
};
