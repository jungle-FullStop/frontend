import { useQuery } from '@tanstack/react-query';

import { getMemberList } from '@api/MemberModal';

import { reactQueryKeys } from '@util/Constants/constants';

const useMemberListDataQuery = (userId: number) => {
  return useQuery({
    queryKey: [reactQueryKeys.MemberList, userId],
    queryFn: () => getMemberList(userId),
  });
};

export default useMemberListDataQuery;
