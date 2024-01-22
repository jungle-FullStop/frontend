import { useState, useEffect } from 'react';
import Heatmap from '@/components/Home/Grass2';
import { useNavigate } from 'react-router-dom';
import { HomeProfile } from '@/components/Common/HomeProfile';
import { Navbar } from '@material-tailwind/react';
import NavBar from '@/components/Common/NavBar';

const Home = () => {
  const imgUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAIVBMVEXY2Njz8/Pq6urv7+/h4eHb29vo6Oje3t7j4+Pt7e3p6ekmc3lwAAADMElEQVR4nO2bC3KDMAxEMeab+x+4JZQBEkhBlq2NZt8JvGOtPkZUFSGEEEIIIYQQQgghhBBCCCEEnXbo6hjDLzHW3dBan0dEO9ThjfrrxDQHKv60NNZnu0ETz2Q8w+xbpPQfZTyl9NZnvEB7GlS7AIP3SnNFxgR4fHVXdYTQWZ/1A+14XUcII2x4tf+6fE8EVXJXB6qS+zpAldzyx8Jofep3buSrLXC563L9eAWsnrRSHSFg2eRSX3JMbX32Lb1cRwhIHaQg865E69OviJ0+g+P3pAsBupLEC8G5koSUNQOSuBJqyAJGLRnShQzWGp4kRxZKbKXrCMFaw4SCRTBMomARDJMIB5E9CGOJgtcx3J7Yn8wgdCluhGjogMi/FEIhmXBjdjdC3BRENy2Km6bRTRvvZrDyM+q6eXxw8xzk5oHOz5Opm0dsP58V3Hzo8fPpzc3HUD+fp90sDPhZ4fCzVONnzcnN4pmfVUA/y5mVm3XZys8Cs5+V8srNkv+Ek98uJpz8CDPh5NekGRc/ixFCCCHky2mb4TGO8cLkHuM4PoYGsGfph1r0Ih/rAWc2Oexz74DRE59PHre0GE8pvcoiykxnF2O96Ln3nNFGSqMs4ymlfIT9/1Qio/ADS6vojVe6gilMZUXrnFKbKfeeqiWUed5OXti4QgHTZ3THltxv9fnDaiFveOVKukfkTMRJmxr3yaakiM23ZLJ8cR2ZlBjoyKKksD8W1H1ipENdiWQ/QwflrYJidfAd1b2bQn3JMYrdiknCWlFLXSo/VqSgZRNDg8wo2STzPHgFlZnRPLAmNILLNGMtKGQus5K+J73Am5X0PckL9MYlZCW1mJin3oXEFAzikIk0l8BcSOKVAF1I2pVA1JCFlFpiffY9ch0wuXdGnoFVvnPqIf6JCaJd3CJtHQH69z3Sbh4ssuSxZX3ud2Q6oKrhjKwmwllEahI4i0hNAjJSbZGNV9anPkKiA64cTkhKIlijNSNptwCTlixtPawPfcRDIARoyl2RzLtuhACWEVkhcSPE+szHUAgaFIIGhaBBIWhQCBoUggaFoEEhaFAIGhSCBoWgQSFoUAgap8f9Ac1KQOtCVp1TAAAAAElFTkSuQmCC';
  const navigate = useNavigate();

  const GrassElements = () => {
    return (
      <div className="m-[0.1rem] h-5 w-5  rounded bg-gray-300"></div>
    );
  };

  return (
    <>
      <div>
        <NavBar />
        <HomeProfile />
        <div className="flex  flex-col items-center justify-center">
          <p className="mb-4 text-center">아직 TIL을 작성하지 않으셨네요 !</p>
          <button
            className="rounded-full bg-yellow-600 px-4 py-2 font-bold text-white hover:bg-yellow-400"
            onClick={() => navigate('/loading')}
          >
            TIL 작성하기
          </button>
        </div>

        <p className="m-5 text-center text-lg font-bold sm:text-2xl">이번 달 TIL HISTORY.</p>

        <div
          // ref={containerRef}
          className=" container mx-auto border-brown mb-10 grid h-auto w-80 grid-cols-7  grid-rows-5 rounded-lg border p-2"
        >
          {[...Array(31)].map((_, index) => (
            <GrassElements key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
