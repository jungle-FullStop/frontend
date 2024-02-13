import { useQuery } from '@tanstack/react-query';
import { findUserBoard } from '@api/BoardApi.ts';
import { reactQueryKeys } from '@util/Constants/constants.ts';

export const useFindUserBoard = () => {
  const userId = localStorage.getItem('userId');
  return useQuery({
    queryKey: [reactQueryKeys.USERBOARD, userId],
    queryFn: () => findUserBoard(Number(userId)),
  });
};
