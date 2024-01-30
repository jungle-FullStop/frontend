import { useState, ChangeEvent } from 'react';

import Icon from '@components/Common/Icon';
import UserSearchContent from '@components/Home/UserSearchContent';
import TeamReceivedRequest from '@components/Member/MemberReceivedRequest.tsx';
import TeamSendRequest from '@components/Member/MemberSendRequest.tsx';

interface MemberRequestProps {
  userId: number;
}

const MemberRequest = ({ userId }: MemberRequestProps) => {
  const [name, setName] = useState('');

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="px-5">
      <div className="relative mb-6 flex flex-col">
        <label className="mb-2 text-2xl font-bold" htmlFor="userSearch">
          유저 찾기
        </label>
        <input
          className="border-brown h-10 w-full rounded-lg border-2 pl-3 outline-none"
          type="text"
          name="userSearch"
          id="userSearch"
          placeholder="닉네임"
          value={name}
          onChange={onChangeName}
        />
        <Icon id={'search'} styles="absolute top-[60%] right-[1%]" />
      </div>
      {!name && (
        <div>
          <div>
            <p className="mb-2 text-2xl font-bold">받은 신청</p>
            <div className="flex h-40 flex-wrap justify-between overflow-scroll">
              <TeamReceivedRequest userId={userId} />
            </div>
          </div>

          <div>
            <p className="mb-2  text-2xl font-bold">보낸 신청</p>
            <div className="flex h-40 flex-wrap justify-between overflow-scroll">
              <TeamSendRequest userId={userId} />
            </div>
          </div>
        </div>
      )}
      {name && (
        <div>
          <p className="mb-6 text-2xl font-bold">검색 결과</p>
          <div className="flex flex-wrap justify-between">
            <UserSearchContent name={name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberRequest;
