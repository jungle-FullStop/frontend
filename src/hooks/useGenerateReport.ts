import { createReport } from '@api/ReportAPI.ts';

const useGenerateReport = async (userId: number) => {
  document.documentElement.style.backgroundColor = '#FFFFE6';
  const result = await createReport(userId);
  localStorage.setItem('todayReport', result?.report);
  return result;
};

export default useGenerateReport;
