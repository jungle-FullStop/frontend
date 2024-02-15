import { useEffect, useState } from 'react';
import wateringCan from '@assets/grass/wateringcan.gif';
import RedCabbage_Raw_1 from '@assets/grass/RedCabbage_Raw_1.png';
import RedCabbage_Raw_2 from '@assets/grass/RedCabbage_Raw_2.png';
import RedCabbage_Raw_3 from '@assets/grass/RedCabbage_Raw_3.png';
import RedCabbage_Raw_4 from '@assets/grass/RedCabbage_Raw_4.png';

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
    if (props.proportion !== currentProportion && currentProportion !== null && props.sse) {
      const escapedDate = escapeCSS(props.date);
      const element = document.querySelector(`.team-grass-${escapedDate}`);
      setShowWateringCan(true);

      if (element) {
        element.classList.add('grow-effect');
        element.classList.add('hidden');
        // After the grow effect, switch to the updated clas
        setTimeout(() => {
          setShowWateringCan(false);
          element.classList.remove('hidden');
          element.classList.remove('grow-effect');
          element.classList.add('pop-in-effect');
          setCurrentProportion(props.proportion); // This will trigger a re-render and apply the new class
        }, 3000); // This timeout should match the duration of the grow effect
      }
    }
  }, [props.proportion, currentProportion, props.date]);
  const grassType = (proportion: number) => {
    if (proportion > 0 && proportion <= 25) {
      return RedCabbage_Raw_1;
    } else if (proportion > 25 && proportion <= 50) {
      return RedCabbage_Raw_2;
    } else if (proportion > 50 && proportion <= 75) {
      return RedCabbage_Raw_3;
    } else if (proportion > 75 && proportion <= 100) {
      return RedCabbage_Raw_4;
    } else {
      return null;
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
        className={`flex-grow rounded  ${props.date !== '0' ? 'bg-noGrass' : 'bg-grassColor'} ${props.iter % 2 == 0 && 'scale-x-[-1]'}`}
      >
        {grassType(props.proportion) && (
          <img
            src={grassType(props.proportion)}
            alt="plant"
            className={`team-grass-${escapeCSS(props.date)} mx-auto mt-2 h-[80px] w-[80px]`}
          />
        )}
      </div>
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
