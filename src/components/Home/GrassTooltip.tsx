import { ReactNode, useState, useEffect, useRef } from 'react';

const GrassTooltip = (props: any) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [firstDayMonth,setFirstDayMonth] = useState(0);

  const grassDiv = useRef<HTMLDivElement>(null);
  const tooltipDiv = useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    const grassNode = grassDiv.current;
    const tooltipNode = tooltipDiv.current;
    if (grassNode && tooltipNode) {
      const rect = grassNode.getBoundingClientRect();
      tooltipNode.style.left = `${rect.left}px`;
    }
  }, [showToolTip]);

  return (
    
    <div
      ref={grassDiv}
      className="flex whitespace-pre"
      onMouseEnter={() => {
        setShowToolTip(true);
       
      }}
      onMouseLeave={() => 
        setShowToolTip(false)   
      }
    >
      
      <div className={`m-[0.2rem] h-5 w-5 flex-grow rounded ${props.date !== '0' ? props.i == 23 ? 'bg-light-green-400' :  'bg-gray-300' : 'bg-white' }`}></div>
      {showToolTip && props.date !== '0' &&(
        <div
          ref={tooltipDiv}
          className="bg-default absolute rounded -translate-y-8 bg-yellow-100 p-2 opacity-70"
        >
          {
            props.i ==23 ? <p><strong> Check TIL</strong> on {props.date}</p> :
            <p><strong> No TIL</strong> on {props.date}</p>
          }
          
        </div>
      )}
    </div>
  );
};


export default GrassTooltip;
