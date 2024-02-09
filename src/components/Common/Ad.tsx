import JungleAd from '@assets/image/jungleAd.png';

export const Ad = () => {
  return (
    <div className={'ad-container'}>
      <img
        src={JungleAd}
        alt={'광고'}
        className={'cursor-pointer rounded-lg'}
        onClick={() => {
          window.open('https://jungle.krafton.com/main');
        }}
      />
    </div>
  );
};
