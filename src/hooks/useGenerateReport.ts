import { createReport } from '@api/ReportAPI.ts';

const useGenerateReport = (userId: number) => {
  createReport(userId);
  document.documentElement.style.backgroundColor = '#FFFFE6';
};

export default useGenerateReport;
