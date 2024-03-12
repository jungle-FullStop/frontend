## 티나끝 서비스 소개
https://github.com/jungle-FullStop

  
## 프론트엔드 프로젝트 설정 및 실행 절차

#### 1. 백엔드 설치

프론트엔드 프로젝트를 시작하기 전에, 관련된 백엔드 시스템이 설치되어 있고 정상적으로 작동하는지 확인합니다. 백엔드가 설치되어 있지 않다면, 먼저 백엔드 시스템을 설치하고 구성합니다.

#### 2. 프로젝트 복제

프론트엔드 프로젝트의 소스 코드를 로컬 시스템으로 복제합니다. 다음의 Git 명령어를 사용하여 프로젝트를 복제할 수 있습니다.

```bash
git clone git@github.com:jungle-FullStop/frontend.git
```

이 명령어는 GitHub에서 프론트엔드 프로젝트의 소스 코드를 현재 디렉토리로 복제합니다.

#### 3. 프로젝트 실행

프로젝트 디렉토리로 이동한 후, npm을 사용하여 프로젝트를 실행합니다.

```bash
cd frontend
npm run dev
```

이 명령어는 프론트엔드 프로젝트를 개발 모드로 실행합니다. 프로젝트가 정상적으로 실행되는지 확인하기 위해 브라우저에서 프로젝트를 열어봅니다.

#### 4. 환경 설정 파일 수정

프로젝트가 정상적으로 실행되면, `constants.ts` 파일에서 구글 `redirect_url` 부분을 프로젝트의 요구사항에 맞게 적절히 수정합니다. 이는 구글 OAuth 인증 과정에서 사용되는 리다이렉트 URL을 설정하는 부분입니다.

위와 같이 필요한 데이터로 `redirect_url`을 수정한 후, 변경사항이 정상적으로 적용되었는지 확인합니다.
