import { createReport } from '@api/ReportAPI.ts';

const useGenerateReport = async () => {
  document.documentElement.style.backgroundColor = '#FFFFE6';
  const result = await createReport();
  localStorage.setItem('todayReport', result?.report);
  return result;
};

export default useGenerateReport;
