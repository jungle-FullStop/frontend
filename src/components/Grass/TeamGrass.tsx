import { useEffect, useState } from 'react';
import wateringCan from '@assets/image/wateringcan.gif';

export const TeamGrass = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [currentProportion, setCurrentProportion] = useState(props.proportion);
  const [showWateringCan, setShowWateringCan] = useState(false);

  // const grassType = (proportion: number) => {
  //   switch (proportion) {
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

  function escapeCSS(dateStr: string) {
    const parts = dateStr.split('.').map((part) => part.trim());
    const numericParts = parts
      .filter((part) => part.match(/^\d+$/))
      .map((part) => part.padStart(2, '0'));
    return numericParts.join('-');
  }

  useEffect(() => {
    // If proportion has changed and it's not the initial render
    if (props.proportion !== currentProportion && currentProportion !== null) {
      const escapedDate = escapeCSS(props.date);
      const element = document.querySelector(`.team-grass-${escapedDate}`);
      setShowWateringCan(true);

      if (element) {
        element.classList.add('grow-effect');
        // After the grow effect, switch to the updated clas
        setTimeout(() => {
          setShowWateringCan(false);
          element.classList.remove('grow-effect');
          element.classList.add('pop-in-effect');
          setCurrentProportion(props.proportion); // This will trigger a re-render and apply the new class
        }, 3000); // This timeout should match the duration of the grow effect
      }
    }
  }, [props.proportion, currentProportion, props.date]);
  const grassType = (proportion: number) => {
    if (proportion > 0 && proportion <= 25) {
      return 'bg-stage1 bg-cover';
    } else if (proportion > 25 && proportion <= 50) {
      return 'bg-stage2 bg-cover';
    } else if (proportion > 50 && proportion <= 75) {
      return 'bg-stage3 bg-cover';
    } else if (proportion > 75 && proportion <= 100) {
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
      {showWateringCan && (
        <div className={'bg-noGrass'}>
          <img
            src={wateringCan}
            alt="Watering Can"
            className="watering-can-animation rotate-effect pop-in-effect"
          />
        </div>
      )}
      <div
        className={`flex-grow rounded team-grass-${escapeCSS(props.date)} ${props.date !== '0' ? grassType(props.proportion) : 'bg-grassColor'} ${props.iter % 2 == 0 && 'scale-x-[-1]'}`}
      ></div>
      {props.proportion >= 1 && showToolTip && props.date !== '0' && (
        <div className="bg-default absolute -translate-x-1/2 -translate-y-full rounded bg-yellow-100 p-2 opacity-70">
          <p>
            <strong> Check TIL</strong> on {props.date}
          </p>
        </div>
      )}
    </div>
  );
};
