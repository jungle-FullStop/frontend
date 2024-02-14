import { useState } from 'react';

export const TeamGrass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);

  // const grassType = (count: number) => {
  //   switch (count) {
  //     case 1:
  //       return 'bg-stage1 bg-cover';
  //     case 2:
  //       return 'bg-stage2 bg-cover';
  //     case 3:
  //       return 'bg-stage3 bg-cover';
  //     case 4:
  //       return 'bg-stage4 bg-cover';
  //     default:
  //       return 'bg-noGrass bg-cover';
  //   }
  // };
  const grassType = (count: number) => {
    if (count > 0 && count <= 25) {
      return 'bg-stage1 bg-cover';
    } else if (count > 25 && count <= 50) {
      return 'bg-stage2 bg-cover';
    } else if (count > 50 && count <= 75) {
      return 'bg-stage3 bg-cover';
    } else if (count > 75 && count <= 100) {
      return 'bg-stage4 bg-cover';
    } else {
      return 'bg-noGrass bg-cover';
    }
  };

  return (
    <div
      className="flex cursor-pointer whitespace-pre"
      onMouseEnter={() => {
        setShowToolTip(true);
      }}
      onMouseLeave={() => setShowToolTip(false)}
    >
      <div
        className={`flex-grow rounded ${props.date !== '0' ? grassType(props.count) : 'bg-grassColor'} ${props.iter % 2 == 0 && 'scale-x-[-1]'}`}
      ></div>
      {props.count >= 1 && showToolTip && props.date !== '0' && (
        <div className="bg-default absolute -translate-x-1/2 -translate-y-full rounded bg-yellow-100 p-2 opacity-70">
          <p>
            <strong> Check TIL</strong> on {props.date}
          </p>
        </div>
      )}
    </div>
  );
};
