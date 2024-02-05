import { createReport } from '@api/ReportAPI.ts';

const useGenerateReport = async () => {
  const result = await createReport();
  localStorage.setItem('todayReport', result?.report);
  return result;
};

export default useGenerateReport;
