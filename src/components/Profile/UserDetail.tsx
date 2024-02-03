const UserDetail = (props: any) => {
  return (
    <div className="px-5">
      <p className="text-2xl font-bold">{props.name}님의 기록</p>
      <div className={'mt-10'}>
        <p className={'text-4xl font-extrabold'}> 서비스 준비 중 입니다</p>
      </div>
    </div>
  );
};

export default UserDetail;
