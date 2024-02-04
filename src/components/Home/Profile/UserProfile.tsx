import { Button, ButtonGroup } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';
import useModal from '@hooks/useModal.tsx';
import FriendList from '@components/Friend/FriendList.tsx';

import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants';
import FriendRequest from '@components/Friend/FriendRequest.tsx';
import { useFriendRankListDataQuery } from '@hooks/useFriendListQuery.ts';
import UserDetail from '@components/Profile/UserDetail.tsx';
import { todayState } from '@/store/Store';
import { useRecoilValue } from 'recoil';

export const UserProfile = () => {
  const todayWrite = useRecoilValue(todayState);
  const userId = localStorage.getItem('userId');
  const name = localStorage.getItem('userName') || '익명';
  const profileImage = localStorage.getItem('userProfileImage') || anonymousImage;

  const { openModal } = useModal();

  const friendListData = useFriendRankListDataQuery(Number(userId));

  if (friendListData.isLoading) {
    return (
      <div className="flex h-full items-center justify-center gap-5">
        <p>Loading...</p>
        <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
      </div>
    );
  }

  if (friendListData.isError) {
    return (
      <div className="flex h-full items-center justify-center gap-5">
        <p>Error!</p>
        <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
      </div>
    );
  }

  const getModalContent = (type: string) => {
    switch (type) {
      case PROFILE_MODAL_CONTENT_TYPE.LIST:
        return <FriendList userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.REQUEST:
        return <FriendRequest userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.EDIT:
        return <UserDetail />;
    }
  };

  return (
    <div className="contents-container">
      <img
        className={`border-brown profileImg mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0 ${todayWrite ? 'border-green-500' : null}`}
        src={profileImage}
        alt="프로필 사진"
      />
      <p className="text-3xl font-bold">{name}님, 안녕하세요 !</p>
      <ButtonGroup
        variant={'text'}
        className="border-brown grid w-max grid-flow-col rounded-2xl border-2 border-solid bg-white p-3"
      >
        <Button
          className="cursor-pointer text-xl font-bold"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })}
        >
          TIL을 함께하는 친구 {friendListData.data.friends.length}명
        </Button>
        <Button
          className="cursor-pointer text-xl font-bold"
          onClick={() =>
            openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.REQUEST) })
          }
        >
          친구 관리
        </Button>
        <Button
          className="cursor-pointer text-xl font-bold"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.EDIT) })}
        >
          내 TIL 정보
        </Button>
      </ButtonGroup>
    </div>
  );
};
