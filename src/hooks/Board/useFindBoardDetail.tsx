import { useQuery } from '@tanstack/react-query';
import { reactQueryKeys } from '@util/Constants/constants.ts';
import { findBoardDetail } from '@api/BoardApi.ts';

export const useFindBoardDetail = (boardId: number) => {
  return useQuery({
    queryKey: [reactQueryKeys.USERBOARDDETAIL, boardId],
    queryFn: () => findBoardDetail(boardId),
  });
};
