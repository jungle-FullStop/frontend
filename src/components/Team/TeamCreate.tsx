import { useRef } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useTeamCreate } from '@hooks/useTeamCreate.ts';
import BackButton from '@components/Common/BackButton.tsx';
const TeamCreate = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    teamName,
    handlers: { handleTeamNameChange, handleTeamNameSubmit },
  } = useTeamCreate(inputRef);

  return (
    <div className="px-5">
      <p className="mb-10 text-2xl font-bold">팀 개설하기</p>
      <form onSubmit={handleTeamNameSubmit} className={'mx-auto w-auto max-w-[300px]'}>
        <div className={'mb-14 flex flex-col items-center'}>
          <Input
            label={'팀 이름'}
            placeholder={'팀 이름 입력'}
            ref={inputRef}
            value={teamName}
            onChange={handleTeamNameChange}
            size={'lg'}
            className="shadow-lg"
            required
          />
          <p className={'mt-5 text-gray-600'}>팀을 대표할 이름을 정해주세요!</p>
        </div>
        <div className="flex place-content-between items-center">
          <BackButton />
          <Button
            type={'submit'}
            color={'amber'}
            className="w-auto text-sm font-bold"
            aria-label="팀 개설"
          >
            팀 개설
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TeamCreate;