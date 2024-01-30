import { useQuery } from '@tanstack/react-query';

import { getFriendList } from '@api/FriendModal';

import { reactQueryKeys } from '@util/Constants/constants';

const useFriendListDataQuery = (userId: number) => {
  return useQuery({
    queryKey: [reactQueryKeys.FriendList, userId],
    queryFn: () => getFriendList(userId),
  });
};

export default useFriendListDataQuery;
