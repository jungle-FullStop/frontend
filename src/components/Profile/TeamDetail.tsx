import teamDefaultImage from '@assets/image/teamDefaultImage.jpeg';

const TeamDetail = () => {
  const teamId = localStorage.getItem('teamId');
  const teamName = localStorage.getItem('teamName');
  const teamProfileImage = localStorage.getItem('teamProfileImage') || teamDefaultImage;
  const description = localStorage.getItem('teamDescription');

  const createdAt = localStorage.getItem('teamCreateAt') || '';

  // 현재 날짜를 얻어오기
  const currentDate = new Date(createdAt);
  // 년도, 달, 요일 변수에 담기
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: number = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const currentDay: number = currentDate.getDate();

  return (
    <div className="px-5">
      <p className="text-2xl font-bold">팀 {teamName} 정보</p>
      <div className={'mt-10'}>
        <img
          className={`border-brown profileImg mx-auto mb-5 h-40 w-40 rounded-full border-4 border-solid object-cover transition duration-1000 ease-in-out sm:mb-0`}
          src={teamProfileImage}
          alt="프로필 사진"
        />
        <div className={'pt-5'}>
          <p className={'text-2xl font-bold'}> 티.나.끝의 {teamId}번째 정원</p>
          <div className={'pt-5'}>
            <p className={'text-xl'}> 팀 이름: {teamName}</p>
            <p className={'text-xl'}> 팀 설명: {description}</p>
            <p className={'text-xl'}>
              팀이 생성된 날: {`${currentYear}년 ${currentMonth}월 ${currentDay}일`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
