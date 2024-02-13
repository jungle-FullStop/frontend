import { createReport } from '@api/ReportAPI.ts';
import { useState } from 'react';

const useGenerateReport = () => {
  const [result, setResult] = useState(null);
  const generateReport = async () => {
    const temp = await createReport();
    setResult(temp);
    localStorage.setItem('todayReport', temp?.report);
  };
  return { result, handlers: { generateReport } };
};

export default useGenerateReport;
