import { useQuery } from '@tanstack/react-query';
import { findUserBoard } from '@api/BoardApi.ts';
import { reactQueryKeys } from '@util/Constants/constants.ts';

export const useFindUserBoard = () => {
  const userId = localStorage.getItem('userId');
  return useQuery({
    queryKey: [reactQueryKeys.USERBOARD, userId],
    queryFn: async () => {
      // findUserBoard 함수를 호출하여 데이터 받아오기
      const data = await findUserBoard(Number(userId));

      // 받아온 데이터를 id를 기준으로 오름차순으로 정렬
      const sortedData = data.boards.sort((a : any, b : any) => b.id - a.id);

      // 정렬된 데이터 반환
      return { ...data, boards: sortedData };
    },
  });
};
