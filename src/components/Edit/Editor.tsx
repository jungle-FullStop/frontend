import { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-tailwind/react';

import axios from 'axios';
import apiPath from '@util/apiPath';
import { useBoardCreate } from '@hooks/Board/useBoardCreate.ts';

const Editor = () => {
  // 사용자 상태 업데이트 함수/**/
  const updateUserStatus = async (status: any) => {
    try {
      await axios.post(apiPath.TEAM.updateState(), { status: status });
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const refreshUserEditTime = async () => {
    try {
      await axios.post(apiPath.TEAM.refresh());
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const {
    title,
    contents,
    reportRefresh,
    handlers: { handleTitleChange, handleContentsChange, handleBoardSubmit, handleRefreshClick },
  } = useBoardCreate();

  useEffect(() => {
    const handleBeforeUnload = async () => {
      await updateUserStatus('not_written');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // 페이지 접근 시 사용자 상태를 'writing'으로 변경
    updateUserStatus('writing');
    // 컴포넌트가 언마운트될 때 'not_written'으로 상태 변경

    const intervalId = setInterval(() => {
      refreshUserEditTime();
    }, 50000); // 50초마다

    return () => {
      clearInterval(intervalId);
      updateUserStatus('not_written');
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // 빈 배열을 넣어 처음 마운트될 때만 실행되도록 함

  return (
    <>
      <p className="mb-2 text-xl font-bold">오늘의 TIL을 적어보세요!</p>
      <form onSubmit={handleBoardSubmit} className={'flex flex-col gap-y-4'}>
        <div className="flex flex-row items-center">
          <p className="text-xl font-bold">제목:</p>
          <input
            type="text"
            id="keywordInput"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
            className="border-brown ml-3 h-10 w-1/2 rounded-xl border px-4 outline-none"
            required
          />
        </div>

        <div data-color-mode="light">
          <MDEditor height={500} value={contents} preview="edit" onChange={handleContentsChange} />
        </div>
        <div className="flex justify-between">
          <div>
            <Button
              color="blue"
              loading={reportRefresh}
              className="flex items-center gap-2"
              onClick={handleRefreshClick}
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
            <Button type={'submit'} variant="gradient" color="amber">
              저장하기
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Editor;
