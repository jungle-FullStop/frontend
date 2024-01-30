import { Typography } from '@material-tailwind/react';
import anonymousImage from '@assets/image/anonymousImage.png';
import { useState } from 'react';
import useModal from '@hooks/useModal.tsx';
import FriendList from '@components/Friend/FriendList.tsx';

import { PROFILE_MODAL_CONTENT_TYPE } from '@util/Constants/constants';

export const UserProfile = () => {
  const userId = localStorage.getItem('userId');
  const [isWrite, setIsWrite] = useState(false);
  let name = localStorage.getItem('userName');
  if (name === null || name === '') {
    name = '익명';
  }
  let profileImage = localStorage.getItem('userProfileImage');
  if (profileImage === null || profileImage === '') {
    profileImage = anonymousImage;
  }

  const { openModal } = useModal();

  const getModalContent = (type: string) => {
    switch (type) {
      case PROFILE_MODAL_CONTENT_TYPE.LIST:
        return <FriendList userId={+userId} />;
    }
  };

  return (
    <div className="contents-container">
      <img
        className={`border-brown mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0 ${isWrite ? 'border-green-700' : 'border-gray-300'}`}
        src={profileImage}
        alt="프로필 사진"
      />
      <div>
        <button
          className="border-slate-300 border hover:border-indigo-300"
          onClick={() => {
            setIsWrite(true);
          }}
        >
          TIL 작성 완료
        </button>
        <Typography className="mb-5 text-3xl font-extrabold">{name}님, 안녕하세요 !</Typography>
        <div className="border-brown grid w-max grid-flow-col rounded-2xl border-2 border-solid bg-white p-5 text-center text-lg font-bold">
          <p className="cursor-pointer">TIL을 함께하는 친구 5명</p>
          <div className="border-brown mx-5 border-l-2 border-solid" />
          <p
            className="cursor-pointer"
            onClick={() =>
              openModal({ children: getModalContent(PROFILE_MODAL_CONTENT_TYPE.LIST) })
            }
          >
            친구 관리
          </p>
          <div className="border-brown mx-5 border-l-2 border-solid" />
          <p className="cursor-pointer">내 정보 수정</p>
        </div>
      </div>
    </div>
  );
};
