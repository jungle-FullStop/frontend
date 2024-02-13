import { Button, ButtonGroup } from '@material-tailwind/react';
import teamDefaultImage from '@assets/image/teamDefaultImage.jpg';
import useModal from '@hooks/Common/useModal.tsx';
import MemberList from '@components/Member/MemberList.tsx';
import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants.ts';
import TeamDetail from '@components/Profile/TeamDetail.tsx';
import useTeamListQuery from '@hooks/Team/useTeamListQuery.ts';

export const TeamProfile = () => {
  const userId = localStorage.getItem('userId');
  const teamName = localStorage.getItem('teamName');
  const teamImage = localStorage.getItem('teamProfileImage') || teamDefaultImage;

  const { openModal } = useModal();

  const teamListData = useTeamListQuery();

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
      {teamListData.isLoading ? (
        <div className={'mx-auto flex items-center'}>
          <p>Loading...</p>
          <div className="border-mint h-10 w-10 animate-spin rounded-full border-t-4"></div>
        </div>
      ) : (
        <>
          <div className="flex w-full items-center gap-4 p-5">
            <div className="">
              <img
                className={`profileImg float-left mb-5 h-32 w-64 rounded-full border-4 object-cover sm:mb-0`}
                src={teamImage}
                alt="프로필 사진"
              />
            </div>
            <div className="w-full">
              <p className="TTLFont whitespace-pre-wrap text-3xl font-bold">
                팀 <span className={'text-green-500'}>{teamName}</span>에{'\n'} 어서오세요 !
              </p>
            </div>
          </div>

          <div>
            <ButtonGroup
              variant={'text'}
              className="border-brown grid  grid-flow-col border-t-2 border-solid bg-white"
            >
              <Button
                className="cursor-pointer text-base before:font-bold"
                onClick={() =>
                  openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })
                }
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
        </>
      )}
    </div>
  );
};
