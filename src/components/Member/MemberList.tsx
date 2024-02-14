import { ChangeEvent, useState } from 'react';

import Icon from '@components/Common/Icon.tsx';
import MemberModalItem from '@components/Member/MemberModalItem.tsx';
import MemberSearchContent from '@components/Member/MemberSearchContent.tsx';

import useMemberListDataQuery from '@hooks/useMemberListQuery.ts';

import { PROFILE_BUTTON_TYPE } from '@util/Constants/constants.ts';

interface MemberListProps {
  userId: number;
}

interface MemberListResponse {
  id: string;
  email: string;
  name: string;
  profileImage: string;
}

const MemberList = ({ userId }: MemberListProps) => {
  const [name, setName] = useState('');

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const memberListData = useMemberListDataQuery();
  // console.log(memberListData.data);

  if (memberListData.isLoading) {
    return <p>팀원목록 가져오는 중...</p>;
  }

  if (memberListData.isError) {
    return <p>팀원목록을 불러오지 못했습니다!</p>;
  }

  const loginUser = localStorage.getItem('userId') ?? 0;
  const profileItemType =
    +loginUser === userId ? PROFILE_BUTTON_TYPE.LIST : PROFILE_BUTTON_TYPE.STRANGER;

  return (
    <div className="px-5">
      <div className="relative mb-6 flex flex-col">
        <label className="mb-6 text-2xl font-bold" htmlFor="memberSearch">
          팀원 검색
        </label>
        <input
          className="border-brown h-10 w-full rounded-lg border-2 pl-3 outline-none"
          type="text"
          name="memberSearch"
          id="memberSearch"
          placeholder="이름 입력"
          value={name}
          onChange={onChangeName}
        />
        <Icon id={'search'} styles="absolute top-2/3 right-[1%]" />
      </div>

      {!name && (
        <div>
          <p className="mb-5 text-2xl font-bold">팀원 목록</p>
          <div className="grid grid-cols-2 justify-between gap-5 overflow-scroll">
            {memberListData.data.length !== 0 ? (
              memberListData.data.map((data: MemberListResponse, index: number) => (
                <MemberModalItem key={index} {...data} type={profileItemType} />
              ))
            ) : (
              <>
                <div></div>
                <div className="mx-auto">
                  <p className="flex pt-[80px] text-2xl font-bold">아직 팀원이 없어요.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {name && (
        <div>
          <p className="mb-2 text-2xl font-bold">검색 결과</p>
          <div className="flex flex-wrap justify-between">
            <MemberSearchContent name={name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;
