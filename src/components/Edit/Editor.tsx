import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const TEMP = {
  body: `### 1. React 및 Redux 사용법 개선
- React 18 및 Redux를 활용한 사용자 등록 및 로그인 예제 검토
-        여기에 입력해주세요
- React-Redux CRUD 디자인 패턴 연구
- Disney-Clone 프로젝트에서의 Redux 사용 사례 분석
  
### 2. 백엔드 통합 및 가짜 백엔드 구현
- React-Redux 애플리케이션에서 'fetch-wrapper' 및 'fake-backend'의 역할과 구현 방법 학습
-        여기에 입력해주세요
- Django-React CRUD 예제를 통한 백엔드와 프론트엔드의 통합 방법 탐구
  
### 3. Redux Toolkit 활용
- Redux Toolkit을 사용하여 상태 관리를 간소화하는 방법 학습
- 상태 관리의 효율성 및 유지 보수 용이성 향상 방안 모색
  
### 4. CRUD 작업 및 API 통신
- 여러 React 프로젝트에서 CRUD 작업의 구현 방법 비교 및 분석
- API 통신을 위한 Axios 사용법 및 최적화 전략 연구`,
};

const Editor = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(TEMP.body);

  return (
    <div>
      <div data-color-mode="light">
        <MDEditor
          height="100%"
          minHeight={300}
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
