import { dateRange, daysInCurrentMonth } from '@util/Constants/dateConstants.ts';
import { UserGrass } from '@components/Grass/UserGrass.tsx';
import { useEffect, useState } from 'react';
import API_PATH from '@util/apiPath.ts';
import axios from 'axios';
import { TIL } from '@/types/TIL';


export const UserGrassDiv = () => {


  let [TILData, setTILdata] = useState<TIL[]>(() => {
    return dateRange.map((item, i) => {
      return {
        date: item,
        id: -1,
        write: false,
      };
    });
  });

  const numberOfZeros = dateRange.filter((value) => value === '0').length;

  // console.log(daysInCurrentMonth);

  useEffect(() => {
    const getData = async () => {
      const userID = localStorage.getItem('userId');
      try {
        const response = await axios.get(`${API_PATH.BOARD.find()}/${userID}`);
        console.log(response.data)
        

        const newTILData = [...TILData];
        for (let i = 0; i < response.data.boards.length; i++) {
          const wirteDate = new Date(response.data.boards[i].timestamp);
          const writeId = response.data.boards[i].id;
          for (let j = 0; j < daysInCurrentMonth.length; j++) {
            if (
              wirteDate.getFullYear() == daysInCurrentMonth[j].getFullYear() &&
              wirteDate.getMonth() == daysInCurrentMonth[j].getMonth() &&
              wirteDate.getDate() == daysInCurrentMonth[j].getDate()
            ) {
              newTILData[i + numberOfZeros].write = true;
              newTILData[i + numberOfZeros].id = writeId;
              setTILdata(newTILData);
            }
          }
        }
        // console.log(TILData)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  const grassElements = TILData.map((data, i) => {
    return <UserGrass date={data.date} write={data.write} pageId={data.id} key={i} />;
  });


  return (
    <div className="contents-container">
      <div>
        <p className="text-center text-2xl font-bold">나의 TIL 잔디밭</p>
        <div className="mx-auto grid w-80 grid-cols-7 grid-rows-1 p-2 text-center">
          <p>Sun</p>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
        </div>
        <div className="border-brown mx-auto grid w-80 grid-cols-7 grid-rows-5 rounded-lg border p-2 ">
          {grassElements}
        </div>
      </div>
    </div>
  );
};
