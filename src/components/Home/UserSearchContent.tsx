import { useEffect, useState } from 'react';
import { getSearchUserList } from '@api/FriendModal';
import FriendModalItem from '@components/Friend/FriendModalItem';
import { PROFILE_BUTTON_TYPE, DEBOUNCE_TIME } from '@util/Constants/constants';

interface UserSearchContentProps {
  name: string;
}

interface UserListResponse {
  id: string;
  email: string;
  name: string;
  profileImage: string;
}

const UserSearchContent = ({ name }: UserSearchContentProps) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!name) return;
      const result = await getSearchUserList(name);
      setUserList(result);
    }, DEBOUNCE_TIME);
    return () => clearTimeout(timer);
  }, [name]);

  const loginUserId = localStorage.getItem('userId') ?? 0;
  const AnotherUserData = userList.filter((data: UserListResponse) => +data.id !== +loginUserId);

  if (AnotherUserData.length === 0) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="font-bold">검색된 사용자가 없어요.</p>
      </div>
    );
  }

  return AnotherUserData.map((data: UserListResponse, index: number) => (
    <FriendModalItem key={index} {...data} type={PROFILE_BUTTON_TYPE.STRANGER} />
  ));
};

export default UserSearchContent;
