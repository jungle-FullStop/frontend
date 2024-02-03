import API_PATH from '@/util/apiPath';
import interceptor from './fetchInterceptor';

export const cockPush = async (memberId: number, pusher: string, body?: string) => {
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
    if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('콕 찌르기 실패했습니다.', error);
  }
};

// export const cockPush = async (memberId: number) => {
//   try {
//     const fetchUrl = API_PATH.PUSH.push(memberId);
//     const response = await interceptor(fetchUrl, {
//       method: 'GET',
//       credential: 'include',
//     });
//     if (!response.ok) throw new Error('올바른 네트워크 응답이 아닙니다.');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('콕 찌르기 실패했습니다.', error);
//   }
// };

export const saveTokenOnServer = async (id: number, token: string) => {
  try {
    const fetchUrl = API_PATH.PUSH.token();
    const response = await interceptor(fetchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        token: token,
      }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    console.log('Token saved successfully on server:', responseData);
  } catch (error) {
    console.error('Error while saving token on server:', error);
  }
};
