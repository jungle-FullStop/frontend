import { Header } from '@components/Landing/Header';
import LandingMainSection from '@components/Landing/LandingMainSection.tsx';
import { Footer } from '@components/Common/Footer.tsx';
import { Setting } from '@components/Common/Setting.tsx';

const Landing = () => {
  return (
    <>
      <Header />
      <LandingMainSection />
      <div className={'landing-container'}></div>
      <Setting />
      <Footer />
    </>
  );
};

export default Landing;
