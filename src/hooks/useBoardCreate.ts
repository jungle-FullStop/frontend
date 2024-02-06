import { createBoard } from '@api/BoardApi.ts';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { createReport } from '@api/ReportAPI.ts';
import { dummyReport } from '@type/components/Edit/dummyReport.tsx';

export const useBoardCreate = () => {
  const report = localStorage.getItem('todayReport') || dummyReport;
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState(report);
  const [reportRefresh, setReportRefresh] = useState(false);

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(() => e.target.value);
  };

  const handleContentsChange = (e: any) => {
    setContents(() => e.target.value);
  };
  const handleBoardSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (title === '') {
      alert('제목을 입력해주세요.');
      return;
    }
    await createBoard(title, contents);
    window.location.href = '/board';
  };

  const handleRefreshClick = async () => {
    // 가이드라인이 생성되는 동안 버튼을 비활성화
    setReportRefresh(true);
    // 가이드라인 생성 요청
    const newReport = await createReport();
    // 가이드라인 생성 완료 후 버튼 활성화
    setReportRefresh(false);
    // 가이드라인을 에디터에 적용
    setContents(newReport?.report);
  };

  return {
    title,
    contents,
    reportRefresh,
    handlers: {
      handleTitleChange,
      handleContentsChange,
      handleBoardSubmit,
      handleRefreshClick,
    },
  };
};
