import { useQuery } from '@tanstack/react-query';

import { getFriendList, getFriendRankList } from '@api/FriendModal';

import { reactQueryKeys } from '@util/Constants/constants';

export const useFriendListDataQuery = (userId: number) => {
  return useQuery({
    queryKey: [reactQueryKeys.FriendList, userId],
    queryFn: () => getFriendList(userId),
  });
};

export const useFriendRankListDataQuery = (userId: number) => {
  return useQuery({
    queryKey: [reactQueryKeys.FriendRankList, userId],
    queryFn: () => getFriendRankList(userId),
  });
};
