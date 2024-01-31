import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { dummyReport } from '@/types/components/Edit/dummyReport';
import API_PATH from '@util/apiPath';

import axios from 'axios';
import apiPath from '@util/apiPath';

const Editor = () => {
  const navigate = useNavigate();
  let report = localStorage.getItem('todayReport');
  if (report === null) {
    report = dummyReport;
  }

  // 사용자 상태 업데이트 함수
  const updateUserStatus = async (status) => {
    try {
      await axios.post(apiPath.TEAM.updateState(), { status });
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  useEffect(() => {
    // 페이지 접근 시 사용자 상태를 'writing'으로 변경
    updateUserStatus('writing');

    // 컴포넌트가 언마운트될 때 'not_written'으로 상태 변경
    return () => {
      updateUserStatus('not_written');
    };
  }, []); // 빈 배열을 넣어 처음 마운트될 때만 실행되도록 함

  const [value, setValue] = useState(report);

  const [, setLoading] = useState(false);
  const postData = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div data-color-mode="light">
        <MDEditor
          height={500}
          value={value}
          preview="preview"
          onChange={(e: any) => {
            setValue(e);
          }}
        />
      </div>
      <div className="mt-2 flex justify-end">
        <Button variant="gradient" color="amber" onClick={postData}>
          저장하기
        </Button>
      </div>
    </div>
  );
};
export default Editor;
