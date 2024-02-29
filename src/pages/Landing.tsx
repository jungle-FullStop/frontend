import { Header } from '@components/Landing/Header';
import LandingMainSection from '@components/Landing/LandingMainSection.tsx';
import { Footer } from '@components/Common/Footer.tsx';
import { Setting } from '@components/Common/Setting.tsx';
import GuideSection from '@components/Landing/GuideSection.tsx';
import StartSection from '@components/Landing/StartSection.tsx';

const Landing = () => {
  return (
    <>
      <Header />
      <LandingMainSection />
      <GuideSection />
      <StartSection />
      <Setting />
      <Footer />
    </>
  );
};

export default Landing;
