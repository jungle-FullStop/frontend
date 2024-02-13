import { useRef } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useTeamJoin } from '@hooks/Team/useTeamJoin.ts';
import BackButton from '@components/Common/BackButton.tsx';

const TeamJoin = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    inviteCode,
    handlers: { handleInviteCodeChange, handleTeamNameSubmit, handleCreatePageClicked },
  } = useTeamJoin(inputRef);

  return (
    <div className="px-5">
      <p className="mb-10 text-2xl font-bold">팀 참가하기</p>
      <form onSubmit={handleTeamNameSubmit} className={'mx-auto w-auto max-w-[300px]'}>
        <div className={'mb-14 flex flex-col items-center'}>
          <Input
            label={'초대 코드'}
            placeholder={'8자리 초대코드 입력'}
            ref={inputRef}
            value={inviteCode}
            onChange={handleInviteCodeChange}
            size={'lg'}
            required
          />
          <div className={'mt-5 flex flex-row items-center gap-x-3'}>
            <p className={'text-sm text-gray-600'}>초대코드가 없으신가요?</p>
            <button
              type="button"
              aria-label="팀 개설하기 페이지 이동"
              onClick={handleCreatePageClicked}
              className={'text-sm text-blue-500'}
            >
              직접 팀을 만들어보세요!
            </button>
          </div>
        </div>
        <div className="flex place-content-between items-center">
          <BackButton />
          <Button
            type={'submit'}
            color={'amber'}
            className="w-auto text-sm font-bold"
            aria-label="팀 참가"
          >
            팀 참가
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TeamJoin;
