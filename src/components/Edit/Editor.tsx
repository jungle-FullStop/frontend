import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { dummyReport } from '@/types/components/Edit/dummyReport';
import API_PATH from '@util/apiPath';

import axios from 'axios';

const Editor = () => {
  const navigate = useNavigate();
  let report = localStorage.getItem('todayReport');
  if (report === null) {
    report = dummyReport;
  }
  const [value, setValue] = useState(report);

  const [loading, setLoading] = useState(false);

  const postData = async () => {
    try {
      setLoading(true);

      // 현재 편집 중인 내용을 postData로 설정
      const postData = {
        userId:localStorage.getItem('userId'),
        contents: value,
      };

      // 데이터 요청
      const response = await axios.post(API_PATH.BOARD.create(), postData);

      console.log('데이터 전송 성공')

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
        <Button
          variant="gradient"
          color="amber"
          onClick={() => {
            postData();
          }}
        >
          저장하기
        </Button>
      </div>
    </div>
  );
};
export default Editor;
