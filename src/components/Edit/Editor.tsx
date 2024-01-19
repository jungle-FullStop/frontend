import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const Editor = () => {
  const [value, setValue] = useState('**Editor입니다!!!**');

  return (
    <div className="container">
      <MDEditor
        height={500}
        value={value}
        onChange={(e: any) => {
          setValue(e);
        }}
      />
    </div>
  );
};
export default Editor;
