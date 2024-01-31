import { useQuery } from '@tanstack/react-query';
import { getTeamUsers } from '@api/TeamAPI.ts';

const useTeamListQuery = () => {
  return useQuery({
    queryKey: ['teamList'], // 쿼리 키 설정
    queryFn: getTeamUsers, // 쿼리 함수 설정
  });
};

export default useTeamListQuery;
