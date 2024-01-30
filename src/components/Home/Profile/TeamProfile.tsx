import { Typography } from '@material-tailwind/react';
import teamDefaultImage from '@assets/image/teamDefaultImage.jpeg';
import useModal from '@hooks/useModal.tsx';
import MemberList from '@components/Member/MemberList.tsx';
import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants.ts';

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

  const getModalContent = (type: string) => {
    switch (type) {
      case PROFILE_MODAL_CONTENT_TYPE.LIST:
        return <MemberList userId={+userId} />;
    }
  };

  return (
    <div className="contents-container">
      <img
        className={`border-brown mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
        src={teamImage}
        alt="프로필 사진"
      />
      <Typography className="mb-5 text-3xl font-extrabold">{teamName}에 어서오세요 !</Typography>
      <div className="border-brown grid w-max grid-flow-col rounded-2xl border-2 border-solid bg-white p-5 text-center text-lg font-bold">
        <p className="cursor-pointer">{teamName}에 소속된 팀원 57명</p>
        <div className="border-brown mx-5 border-l-2 border-solid" />
        <p
          className="cursor-pointer"
          onClick={() => openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })}
        >
          팀원 관리
        </p>
        <div className="border-brown mx-5 border-l-2 border-solid" />
        <p className="cursor-pointer">팀 정보 수정</p>
      </div>
    </div>
  );
};
