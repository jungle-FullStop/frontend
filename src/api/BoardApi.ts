import API_PATH from '@/util/apiPath';
import interceptor from '@api/fetchInterceptor.ts';

export const createBoard = async (title: string, contents: string) => {
  try {
    const response = await interceptor(API_PATH.BOARD.create(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, contents: contents }),
    });
    return await response.json();
  } catch (error) {
    console.error('게시글을 생성하는데 실패했습니다.', error);
  }
};

export const findUserBoard = async (userId: number) => {
  try {
    const response = await interceptor(API_PATH.BOARD.userFind(userId), {});
    return await response.json();
  } catch (error) {
    console.error('해당 유저의 글을 찾는데 실패했습니다.', error);
  }
};
