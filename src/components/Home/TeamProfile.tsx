import { Typography } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';
import { useState } from 'react';

export const TeamProfile = () => {
  //친구 관리 모달창 닫혀 있으면 false, 열려 있으면 true
  const [isWrite, setIsWrite] = useState(false);
  const [handleFriend, setHandleFriend] = useState(false);
  const name = localStorage.getItem('userName');
  let profileImage = localStorage.getItem('userProfileImage');
  if (profileImage === null) {
    profileImage = anonymousImage;
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
      <h1> 안녕하세요 </h1>
    </div>
  );
};
