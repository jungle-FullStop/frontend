import { Typography } from '@material-tailwind/react';
import teamDefaultImage from '@assets/image/teamDefaultImage.jpeg';
import { useState } from 'react';

export const TeamProfile = () => {
  //친구 관리 모달창 닫혀 있으면 false, 열려 있으면 true
  const [handleFriend, setHandleFriend] = useState(false);
  let teamName = localStorage.getItem('teamName');
  if (teamName === null) {
    teamName = '정글 3기';
  }
  let teamImage = localStorage.getItem('teamProfileImage');
  if (teamImage === null) {
    teamImage = teamDefaultImage;
  }

  //모달창 여는 함수
  const openModal = () => {
    setHandleFriend(true);
  };

  //모달창 닫는 함수
  const closeModal = () => {
    setHandleFriend(false);
  };

  return (
    <div className="contents-container">
      <img
        className={`border-brown mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
        src={teamImage}
        alt="프로필 사진"
      />
      {handleFriend ? (
        <div className="fixed inset-0  flex  items-center justify-center  bg-gray-800 bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-8">
            <h2 className="mb-4 text-2xl font-bold">친구 관리</h2>
            {/* 모달 내용 및 로직 구현 */}
            <p>친구 0명</p>
            <button onClick={closeModal} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
              닫기
            </button>
          </div>
        </div>
      ) : null}

      <Typography className="mb-5 text-3xl font-extrabold">{teamName}에 어서오세요 !</Typography>
      <div className="border-brown grid w-max grid-flow-col rounded-2xl border-2 border-solid bg-white p-5 text-center text-lg font-bold">
        <p className="cursor-pointer">{teamName}에 소속된 팀원 57명</p>
        <div className="border-brown mx-5 border-l-2 border-solid" />
        <p className="cursor-pointer" onClick={openModal}>
          팀원 관리
        </p>
        <div className="border-brown mx-5 border-l-2 border-solid" />
        <p className="cursor-pointer">팀 정보 수정</p>
      </div>
    </div>
  );
};
