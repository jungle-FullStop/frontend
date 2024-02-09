import { Button, ButtonGroup } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';
import useModal from '@hooks/useModal.tsx';
import FriendList from '@components/Friend/FriendList.tsx';

import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants';
import FriendRequest from '@components/Friend/FriendRequest.tsx';
import { useFriendRankListDataQuery } from '@hooks/useFriendListQuery.ts';
import { todayState } from '@/store/Store';
import { useRecoilValue } from 'recoil';

export const UserProfile = () => {
  const todayWrite = useRecoilValue(todayState);
  const userId = localStorage.getItem('userId');
  const name = localStorage.getItem('userName') || '익명';
  const profileImage = localStorage.getItem('userProfileImage') || anonymousImage;

  const { openModal } = useModal();

  const friendListData = useFriendRankListDataQuery(Number(userId));

  const getModalContent = (type: string) => {
    switch (type) {
      case PROFILE_MODAL_CONTENT_TYPE.LIST:
        return <FriendList userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.REQUEST:
        return <FriendRequest userId={Number(userId)} />;
    }
  };

  return (
    <div className="profile-container">
      {friendListData.isLoading ? (
        <div className={'flex h-full items-center justify-center'}>
          <p>Loading...</p>
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
        </div>
      ) : (
        <>
          <div className="flex w-full items-center gap-4 p-5">
            <div>
              <img
                className={`profileImg float-left mb-5 h-32 w-64 rounded-full border-4 object-cover transition duration-1000 ease-in-out sm:mb-0 ${todayWrite ? 'border-green-400' : null}`}
                src={profileImage}
                alt="프로필 사진"
              />
            </div>
            <div className="w-full">
              <p className="TTLFont whitespace-pre-wrap text-3xl font-bold">
                <span className={'text-amber-500'}>{name}</span>님,{'\n'} 안녕하세요 !
              </p>
            </div>
          </div>

          <div className="">
            <ButtonGroup
              variant={'text'}
              className=" border-brown grid  grid-flow-col border-t-2 border-solid bg-white "
            >
              <Button
                className="cursor-pointer text-base before:font-bold"
                onClick={() =>
                  openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })
                }
              >
                TIL을 함께하는 친구 {friendListData.data.friends.length}명
              </Button>
              <Button
                className="cursor-pointer text-base font-bold"
                onClick={() =>
                  openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.REQUEST) })
                }
              >
                친구 관리
              </Button>
            </ButtonGroup>
          </div>
        </>
      )}
    </div>
  );
};
