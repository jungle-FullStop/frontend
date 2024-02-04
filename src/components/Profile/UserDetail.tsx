import anonymousImage from '@assets/image/anonymousImage.png';

const UserDetail = () => {
  const userId = localStorage.getItem('userId');
  const email = localStorage.getItem('email');
  const userName = localStorage.getItem('userName');
  const userProfileImage = localStorage.getItem('userProfileImage') || anonymousImage;
  return (
    <div className="px-5">
      <p className="text-2xl font-bold">{userName}님의 기록</p>
      <div className={'mt-10'}>
        <img
          className={`border-brown profileImg mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
          src={userProfileImage}
          alt="프로필 사진"
        />
        <div className={'pt-5'}>
          <p className={'text-2xl font-bold'}> 티.나.끝의 {userId}번째 정원사</p>
          <div className={'pt-5'}>
            <p className={'text-xl'}> 이름: {userName}</p>
            <p className={'text-xl'}> 연락처: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
