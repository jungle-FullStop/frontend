import JungleAd from '@assets/image/jungleAd.png';
import SpartaAd from '@assets/image/spartaAd.png';

interface AdProps {
  mode: string;
}

export const Ad = ({ mode }: AdProps) => {
  if (mode === 'sparta') {
    return (
      <div className={'board-ad-container'}>
        <img
          src={SpartaAd}
          alt={'광고'}
          className={'cursor-pointer rounded-lg'}
          onClick={() => {
            window.open('https://spartacodingclub.kr/');
          }}
        />
      </div>
    );
  } else {
    return (
      <div className={'home-ad-container'}>
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
  }
};
