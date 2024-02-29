import logo from '@assets/image/logo.png';

export const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-white">
      <div className="flex items-center gap-x-3 p-5">
        <img src={logo} alt="메인로고" className="w-16" />
        <p className="text-4xl font-extrabold text-amber-500">티.나.끝</p>
      </div>
    </div>
  );
};
