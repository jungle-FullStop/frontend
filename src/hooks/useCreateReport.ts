import { createReport } from '@api/ReportAPI.ts';
import { useQuery } from '@tanstack/react-query';
import { reactQueryKeys } from '@util/Constants/constants.ts';

export const useCreateReport = (userId: number) => {
  return useQuery({
    queryKey: [reactQueryKeys.Report, userId],
    queryFn: () => createReport(userId),
  });
};
