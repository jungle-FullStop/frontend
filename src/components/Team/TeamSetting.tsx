import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import TeamCreate from '@components/Team/TeamCreate.tsx';
import TeamJoin from '@components/Team/TeamJoin.tsx';

const TeamSetting = () => {
  const [create, setCreate] = useState(false);
  const [join, setJoin] = useState(false);

  return (
    <>
      {!create && !join && (
        <div className="px-5">
          <p className="text-2xl font-bold">팀 설정</p>
          <div className="relative m-5 flex flex-col">
            <div className="flex flex-col gap-y-10 text-center">
              <div>
                <p>우리 팀만의 TIL 공간을 원하시나요?</p>
                <Button
                  color={'amber'}
                  className="w-auto px-20 text-2xl font-bold"
                  onClick={() => setCreate(true)}
                  aria-label="팀 개설하기"
                >
                  팀 개설하기
                </Button>
              </div>
              <div>
                <p>초대코드가 있으신가요?</p>
                <Button
                  color={'amber'}
                  className="w-auto px-20 text-2xl font-bold"
                  onClick={() => setJoin(true)}
                  aria-label="팀 참가하기"
                >
                  팀 참가하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {create && <TeamCreate />}
      {join && <TeamJoin />}
    </>
  );
};

export default TeamSetting;
