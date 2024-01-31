import { Button, ButtonGroup } from '@material-tailwind/react';
import teamDefaultImage from '@assets/image/teamDefaultImage.jpeg';
import useModal from '@hooks/useModal.tsx';
import MemberList from '@components/Member/MemberList.tsx';
import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants.ts';
import MemberRequest from '@components/Member/MemberRequest.tsx';
import useMemberListDataQuery from '@hooks/useMemberListQuery.ts';
import TeamDetail from '@components/Profile/TeamDetail.tsx';

export const TeamProfile = () => {
  const userId = localStorage.getItem('userId');
  let teamName = localStorage.getItem('teamName');
  if (teamName === null || teamName === '') {
    teamName = '정글 3기';
  }
  let teamImage = localStorage.getItem('teamProfileImage');
  if (teamImage === null || teamImage === '') {
    teamImage = teamDefaultImage;
  }

  const { openModal } = useModal();

  const memberListData = useMemberListDataQuery(Number(userId));

  if (memberListData.isLoading) {
    return <p>팀원목록 가져오는 중...</p>;
  }

  if (memberListData.isError) {
    return <p>팀원목록을 불러오지 못했습니다!</p>;
  }

  const getModalContent = (type: string) => {
    switch (type) {
      case PROFILE_MODAL_CONTENT_TYPE.LIST:
        return <MemberList userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.REQUEST:
        return <MemberRequest userId={Number(userId)} />;
      case PROFILE_MODAL_CONTENT_TYPE.EDIT:
        return <TeamDetail name={String(teamName)} />;
    }
  };

  return (
    <div className="contents-container">
      <img
        className={`border-brown mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
        src={teamImage}
        alt="프로필 사진"
      />
      <p className="text-3xl font-bold">{teamName}에 어서오세요 !</p>
      <ButtonGroup
        variant={'text'}
        className="border-brown grid w-full grid-flow-col rounded-2xl border-2 border-solid bg-white p-4 text-lg font-bold"
      >
        <Button
          className="cursor-pointer text-xl font-bold"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })}
        >
          {teamName}에 소속된 팀원 {memberListData.data.member.length}명
        </Button>
        <Button
          className="cursor-pointer text-xl font-bold"
          onClick={() =>
            openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.REQUEST) })
          }
        >
          팀원 관리
        </Button>
        <Button
          className="cursor-pointer text-xl font-bold"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.EDIT) })}
        >
          팀 TIL 정보
        </Button>
      </ButtonGroup>
    </div>
  );
};
