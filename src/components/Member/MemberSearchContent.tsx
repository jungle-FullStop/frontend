import { useEffect, useState } from 'react';

import { recommendMember } from '@api/MemberModal.ts';

import MemberModalItem from '@components/Member/MemberModalItem.tsx';

import { DEBOUNCE_TIME, PROFILE_BUTTON_TYPE } from '@util/Constants/constants.ts';

interface MemberSearchContentProps {
  name: string;
}

interface MemberListResponse {
  id: string;
  email: string;
  name: string;
  profileImage: string;
}

const MemberSearchContent = ({ name }: MemberSearchContentProps) => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!name) return;
      const result = await recommendMember(name);
      setMemberList(result);
    }, DEBOUNCE_TIME);
    return () => clearTimeout(timer);
  }, [name]);

  if (memberList.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="font-bold">검색된 팀원이 없어요.</p>
      </div>
    );
  }

  return memberList.map((data: MemberListResponse, index: number) => (
    <MemberModalItem key={index} {...data} type={PROFILE_BUTTON_TYPE.LIST} />
  ));
};

export default MemberSearchContent;
