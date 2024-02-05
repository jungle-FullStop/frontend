import { ChangeEvent, useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { dummyReport } from '@/types/components/Edit/dummyReport';
import API_PATH from '@util/apiPath';

import axios from 'axios';
import apiPath from '@util/apiPath';
import { createReport } from '@api/ReportAPI.ts';

const Editor = () => {
  const [title, setTitle] = useState<string>('');
  const navigate = useNavigate();
  const report = localStorage.getItem('todayReport') || dummyReport;

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // 사용자 상태 업데이트 함수/**/
  const updateUserStatus = async (status: any) => {
    try {
      await axios.post(apiPath.TEAM.updateState(), { status: status });
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  useEffect(() => {
    // 페이지 접근 시 사용자 상태를 'writing'으로 변경
    updateUserStatus('writing');
    // 컴포넌트가 언마운트될 때 'not_written'으로 상태 변경
    return () => {
      // updateUserStatus('not_written');
    };
  }, []); // 빈 배열을 넣어 처음 마운트될 때만 실행되도록 함
  const [value, setValue] = useState(report);
  const [reportRefresh, setReportRefresh] = useState(false);

  const refreshClickHandler = async () => {
    setReportRefresh(true);
    const report = await createReport();
    setReportRefresh(false);
    setValue(report?.report);
  };

  const postData = async () => {
    try {
      // 현재 편집 중인 내용을 postData로 설정
      const postData = {
        userId: localStorage.getItem('userId'),
        contents: value,
      };
      // 데이터 요청
      await axios.post(API_PATH.BOARD.create(), postData);
      console.log('데이터 전송 성공');
      // 데이터를 성공적으로 받았다면 이동
      navigate('/board');
    } catch (error: any) {
      console.error('Error during HTTP request:', error);
    }
  };

  return (
    <>
      <p className="text-3xl font-bold">오늘의 TIL을 적어보세요!</p>
      <div className="flex flex-row items-center">
        <p className="text-xl font-bold">제목:</p>
        <input
          type="text"
          id="keywordInput"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={changeTitle}
          className="border-brown ml-3 h-10 w-1/2 rounded-xl border px-4 outline-none"
        />
      </div>
      <div data-color-mode="light">
        <MDEditor
          height={500}
          value={value}
          preview="edit"
          onChange={(e: any) => {
            setValue(e);
          }}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <Button
            color="blue"
            loading={reportRefresh}
            className="flex items-center gap-2"
            onClick={refreshClickHandler}
          >
            가이드라인 재생성
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </Button>
        </div>
        <div>
          <Button variant="gradient" color="amber" onClick={postData}>
            저장하기
          </Button>
        </div>
      </div>
    </>
  );
};
export default Editor;
