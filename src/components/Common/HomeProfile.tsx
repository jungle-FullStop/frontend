import { useState,useRef } from 'react';

export const HomeProfile = () => {


  //친구 관리 모달창 닫혀 있으면 false, 열려 있으면 true
  const [handleFriend, setHandleFriend] = useState(false);

  //모달창 여는 함수
  const openModal = () => {
    setHandleFriend(true)
  }
  
  //모달창 닫는 함수
  const closeModal = () => {
    setHandleFriend(false)
  }


  const imgUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAIVBMVEXY2Njz8/Pq6urv7+/h4eHb29vo6Oje3t7j4+Pt7e3p6ekmc3lwAAADMElEQVR4nO2bC3KDMAxEMeab+x+4JZQBEkhBlq2NZt8JvGOtPkZUFSGEEEIIIYQQQgghhBBCCCEEnXbo6hjDLzHW3dBan0dEO9ThjfrrxDQHKv60NNZnu0ETz2Q8w+xbpPQfZTyl9NZnvEB7GlS7AIP3SnNFxgR4fHVXdYTQWZ/1A+14XUcII2x4tf+6fE8EVXJXB6qS+zpAldzyx8Jofep3buSrLXC563L9eAWsnrRSHSFg2eRSX3JMbX32Lb1cRwhIHaQg865E69OviJ0+g+P3pAsBupLEC8G5koSUNQOSuBJqyAJGLRnShQzWGp4kRxZKbKXrCMFaw4SCRTBMomARDJMIB5E9CGOJgtcx3J7Yn8wgdCluhGjogMi/FEIhmXBjdjdC3BRENy2Km6bRTRvvZrDyM+q6eXxw8xzk5oHOz5Opm0dsP58V3Hzo8fPpzc3HUD+fp90sDPhZ4fCzVONnzcnN4pmfVUA/y5mVm3XZys8Cs5+V8srNkv+Ek98uJpz8CDPh5NekGRc/ixFCCCHky2mb4TGO8cLkHuM4PoYGsGfph1r0Ih/rAWc2Oexz74DRE59PHre0GE8pvcoiykxnF2O96Ln3nNFGSqMs4ymlfIT9/1Qio/ADS6vojVe6gilMZUXrnFKbKfeeqiWUed5OXti4QgHTZ3THltxv9fnDaiFveOVKukfkTMRJmxr3yaakiM23ZLJ8cR2ZlBjoyKKksD8W1H1ipENdiWQ/QwflrYJidfAd1b2bQn3JMYrdiknCWlFLXSo/VqSgZRNDg8wo2STzPHgFlZnRPLAmNILLNGMtKGQus5K+J73Am5X0PckL9MYlZCW1mJin3oXEFAzikIk0l8BcSOKVAF1I2pVA1JCFlFpiffY9ch0wuXdGnoFVvnPqIf6JCaJd3CJtHQH69z3Sbh4ssuSxZX3ud2Q6oKrhjKwmwllEahI4i0hNAjJSbZGNV9anPkKiA64cTkhKIlijNSNptwCTlixtPawPfcRDIARoyl2RzLtuhACWEVkhcSPE+szHUAgaFIIGhaBBIWhQCBoUggaFoEEhaFAIGhSCBoWgQSFoUAgap8f9Ac1KQOtCVp1TAAAAAElFTkSuQmCC';


  return (
    <section className="flex flex-col items-center justify-center p-11 sm:p-0">
      <div className="my-10 flex flex-col items-center justify-center sm:flex-row">
        <img
          className="border-brown mb-5 h-52 w-52 rounded-full border-2 border-solid object-cover sm:mb-0"
          src={imgUrl}
          alt="나의 프로필 사진"
        />

        {handleFriend ? (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="w-96 rounded-lg bg-white p-8">
              <h2 className="mb-4 text-2xl font-bold">친구 관리</h2>
              {/* 모달 내용 및 로직 구현 */}
              <p>친구 0명</p>
              <button
                onClick={closeModal}
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
              >
                닫기
              </button>
            </div>
          </div>
        ) : null}

        <div className="sm:ml-10">
          <p className="mb-8 text-2xl font-bold sm:text-3xl">준희님, 안녕하세요 !</p>
          <div className="border-brown grid w-max grid-flow-col rounded-2xl border-2 border-solid bg-white p-5 text-center text-lg font-bold">
            <p className="cursor-pointer">TIL을 함께하는 친구 3명</p>
            <div className="border-brown mx-5 border-l-2 border-solid" />
            <p
              className="cursor-pointer"
              onClick={openModal}
            >
              친구 관리
            </p>
            <div className="border-brown mx-5 border-l-2 border-solid" />
            <p className="cursor-pointer">내 정보 수정</p>
          </div>
        </div>
      </div>

        <div className='text-center mb-20'>
        <p>함께하는 친구 목록 </p>
      <div className = 'flex items-center justify-center'>
      <img
          className="border-brown m-10 w-25 h-20 rounded-full border-2 border-solid object-cover sm:mb-0"
          src={imgUrl}
          alt="나의 프로필 사진"
        />
         <img
          className="border-brown m-10  w-20 h-20    rounded-full border-2 border-solid object-cover sm:mb-0"
          src={imgUrl}
          alt="나의 프로필 사진"
        />
         <img
          className="border-brown m-10   w-20 h-20   rounded-full border-2 border-solid object-cover sm:mb-0"
          src={imgUrl}
          alt="나의 프로필 사진"
        />
          </div>
      </div>

      {/* <div className="mb-10 flex w-full flex-1 flex-col items-center">
        <div className="mb-5 text-center text-lg font-bold leading-relaxed sm:text-2xl">
          {TEXT_ABOUT_EXISTED_TODAY[`${isExistedTodayDiary}`]['noticeText'].map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <Button
          text={TEXT_ABOUT_EXISTED_TODAY[`${isExistedTodayDiary}`]['buttonText']}
          type={DEFAULT}
          size={LARGE}
          onClick={() => navigate(targetPage)}
        />
      </div> */}
    </section>
  );
};
