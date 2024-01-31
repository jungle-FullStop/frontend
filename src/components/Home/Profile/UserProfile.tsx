import { Typography } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';
import useModal from '@hooks/useModal.tsx';
import FriendList from '@components/Friend/FriendList.tsx';

import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants';
import FriendRequest from '@components/Friend/FriendRequest.tsx';
import ProfileEdit from '@components/Profile/ProfileEdit.tsx';
import { useFriendRankListDataQuery } from '@hooks/useFriendListQuery.ts';
import { todayState } from '@/store/Store';
import { useRecoilValue } from 'recoil';

export const UserProfile = () => {
  const todayWrite = useRecoilValue(todayState) ;

  const userId = localStorage.getItem('userId');
  let name = localStorage.getItem('userName');
  if (name === null || name === '') {
    name = '익명';
  }
  let profileImage = localStorage.getItem('userProfileImage');
  if (profileImage === null || profileImage === '') {
    profileImage = anonymousImage;
  }

  const { openModal } = useModal();

  const friendListData = useFriendRankListDataQuery(Number(userId));

  if (friendListData.isLoading) {
    return <p>친구목록 가져오는 중...</p>;
  }

  if (friendListData.isError) {
    return <p>친구목록을 불러오지 못했습니다!</p>;
  }

  const getModalContent = (type: string) => {
    switch (type) {
      case PROFILE_MODAL_CONTENT_TYPE.LIST:
        return <FriendList userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.REQUEST:
        return <FriendRequest userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.EDIT:
        return <ProfileEdit name={String(name)} />;
    }
  };

 

  return (
    <div className="contents-container">
      <img
        className={`border-brown mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0 profileImg ${todayWrite ? 'border-green-500' : null}`}
        src={profileImage}
        alt="프로필 사진"
      />
      <Typography className="text-3xl font-extrabold">{name}님, 안녕하세요 !</Typography>
      <div className="border-brown grid w-max grid-flow-col rounded-2xl border-2 border-solid bg-white p-5 text-center text-lg font-bold">
        <p
          className="cursor-pointer"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })}
        >
          TIL을 함께하는 친구 {friendListData.data.friends.length}명
        </p>
        <div className="border-brown mx-5 border-l-2 border-solid" />
        <p
          className="cursor-pointer"
          onClick={() =>
            openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.REQUEST) })
          }
        >
          친구 관리
        </p>
        <div className="border-brown mx-5 border-l-2 border-solid" />
        <p
          className="cursor-pointer"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.EDIT) })}
        >
          내 정보 수정
        </p>
      </div>
    </div>
  );
};
