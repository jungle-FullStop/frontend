import { Typography } from '@material-tailwind/react';

const MemberList = () => {
  return (
    <div className="modal-back-container">
      <div className="modal-container">
        <h2 className="mb-4 text-2xl font-bold">친구 관리</h2>
        {/* 모달 내용 및 로직 구현 */}
        <Typography>친구 0명</Typography>
      </div>
    </div>
  );
};

export default MemberList;
