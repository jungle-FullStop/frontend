import anonymousImage from '@assets/image/anonymousImage.png';

const UserDetail = () => {
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');
  const userProfileImage = localStorage.getItem('userProfileImage') || anonymousImage;
  const tilScore = localStorage.getItem('tilScore');
  const teamName = localStorage.getItem('teamName');

  const createdAt = localStorage.getItem('userCreateAt') || '';

  // 현재 날짜를 얻어오기
  const currentDate = new Date(createdAt);
  // 년도, 달, 요일 변수에 담기
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: number = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const currentDay: number = currentDate.getDate();

  return (
    <div className="px-5">
      <p className="text-2xl font-bold">{userName}님의 정보</p>
      <div className={'mt-10'}>
        <img
          className={`border-brown profileImg mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
          src={userProfileImage}
          alt="프로필 사진"
        />
        <div className={'pt-5'}>
          <p className={'text-xl font-bold text-blue-gray-500'}> 팀 {teamName}</p>
          <p className={'text-3xl font-bold'}> 티.나.끝의 {userId}번째 정원사</p>
          <div className={'pt-5'}>
            <p className={'text-xl'}> 이름: {userName}</p>
            <p className={'text-xl'}>
              TIL을 적기 시작한 날: {`${currentYear}년 ${currentMonth}월 ${currentDay}일`}
            </p>
            <p className={'text-xl'}> 잔디를 심은 횟수: {tilScore}번</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
