import { useQuery } from '@tanstack/react-query';

import { getMemberList } from '@api/TeamAPI.ts';

import { reactQueryKeys } from '@util/Constants/constants';

const useMemberListDataQuery = () => {
  return useQuery({
    queryKey: [reactQueryKeys.MemberList],
    queryFn: () => getMemberList(),
  });
};

export default useMemberListDataQuery;
