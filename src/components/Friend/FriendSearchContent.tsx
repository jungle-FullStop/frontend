import { useEffect, useState } from 'react';

import { recommendFriend } from '@api/FriendModal.ts';

import FriendModalItem from '@components/Friend/FriendModalItem.tsx';

import { DEBOUNCE_TIME, PROFILE_BUTTON_TYPE } from '@util/Constants/constants.ts';

interface FriendSearchContentProps {
  name: string;
}

interface FriendListResponse {
  id: string;
  email: string;
  name: string;
  profileImage: string;
}

const FriendSearchContent = ({ name }: FriendSearchContentProps) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!name) return;
      const result = await recommendFriend(name);
      setFriendList(result);
    }, DEBOUNCE_TIME);
    return () => clearTimeout(timer);
  }, [name]);

  if (friendList.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="font-bold">검색된 친구가 없어요.</p>
      </div>
    );
  }

  return friendList.map((data: FriendListResponse, index: number) => (
    <FriendModalItem key={index} {...data} type={PROFILE_BUTTON_TYPE.LIST} />
  ));
};

export default FriendSearchContent;
