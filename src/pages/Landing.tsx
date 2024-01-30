import { Header } from '@components/Landing/Header';
import { LandingMain } from '@/components/Landing/LandingMain';
import { LoginButton } from '@/components/Landing/LoginButton';

const Landing = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-landing">
      <Header />
      <div className="mx-auto mb-20 flex flex-grow items-center">
        <div id="Main" className="flex flex-col text-left">
          <LandingMain />
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Landing;
