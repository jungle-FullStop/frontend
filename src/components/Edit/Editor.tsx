import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { dummyReport } from '@/types/components/Edit/dummyReport';

const Editor = () => {
  const navigate = useNavigate();
  let report = localStorage.getItem('todayReport');
  if (report === null) {
    report = dummyReport;
  }
  const [value, setValue] = useState(report);

  return (
    <div>
      <div data-color-mode="light">
        <MDEditor
          height="100%"
          minHeight={500}
          value={value}
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
            navigate('/home');
          }}
        >
          저장하기
        </Button>
      </div>
    </div>
  );
};
export default Editor;
