import { IconButton } from '@material-tailwind/react';
import up from '@assets/image/up.png';
import setting from '@assets/image/setting.png';

export const Setting = () => {
  return (
    <div className={'setting-container'}>
      <IconButton
        className="cursor-pointer rounded-full border bg-white shadow"
        onClick={() => (window.location.href = '#')}
      >
        <img src={up} alt={'최상단으로 이동'} />
      </IconButton>
      <IconButton className="cursor-pointer rounded-full border bg-white shadow">
        <img src={setting} alt={'최상단으로 이동'} />
      </IconButton>
    </div>
  );
};
