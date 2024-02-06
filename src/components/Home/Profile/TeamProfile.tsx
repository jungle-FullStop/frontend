import { Button, ButtonGroup } from '@material-tailwind/react';
import teamDefaultImage from '@assets/image/teamDefaultImage.jpg';
import useModal from '@hooks/useModal.tsx';
import MemberList from '@components/Member/MemberList.tsx';
import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants.ts';
import TeamDetail from '@components/Profile/TeamDetail.tsx';
import useTeamListQuery from '@hooks/useTeamListQuery.ts';
import { WriteTIL } from '../WriteTIL';

export const TeamProfile = () => {
  const userId = localStorage.getItem('userId');
  const teamName = localStorage.getItem('teamName');
  const teamImage = localStorage.getItem('teamProfileImage') || teamDefaultImage;

  const { openModal } = useModal();

  const teamListData = useTeamListQuery();

  if (teamListData.isLoading) {
    return (
      <div className="flex h-full items-center justify-center gap-5">
        <p>Loading...</p>
        <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
      </div>
    );
  }

  if (teamListData.isError) {
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
        return <MemberList userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.DETAIL:
        return <TeamDetail />;
    }
  };

  return (
    <div className="profile-container">
      <div className="flex w-full items-center gap-4 p-5">
        <div className=''>
          <img
            className={`profileImg float-left mb-5 h-32 w-64 rounded-full object-cover  border-4 transition duration-1000 ease-in-out  sm:mb-0`}
            src={teamImage}
            alt="프로필 사진"
          />
        </div>
        <div className='w-full'>
        <p className="mb-3 text-2xl font-bold">
          팀 <span className={'text-green-500'}>{teamName}</span>에 어서오세요 !
        </p>
        <WriteTIL id={userId} color="green" />
        </div>
      </div>
      
      <div>
      <ButtonGroup
        variant={'text'}
        className="border-brown grid  grid-flow-col border-t-2 border-solid bg-white"
      >
        <Button
          className="cursor-pointer text-base before:font-bold"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })}
        >
          팀에 소속된 팀원 {teamListData.data.length}명
        </Button>
        <Button
          className="cursor-pointer text-base font-bold"
          onClick={() =>
            openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.DETAIL) })
          }
        >
          팀 {teamName} 정보
        </Button>
      </ButtonGroup>
      </div>
    </div>
  );
};
