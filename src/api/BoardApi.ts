import API_PATH from '@/util/apiPath';

export const findUserBoard = async (userId: number) => {
  try {
    const response = await fetch(API_PATH.BOARD.userFind(userId), {
      method: 'GET',
    });
    const userBoard = await response.json();
    return userBoard;
  } catch (error) {
    console.error('해당 유저의 글을 찾는데 실패했습니다.', error);
  }
};
