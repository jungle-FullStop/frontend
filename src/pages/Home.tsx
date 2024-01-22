import { useState, useEffect } from "react";
import Heattmap from "@/components/Home/Grass2";
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';


const Home = () => {
  const navigate = useNavigate();
  

  let [member,setMember] = useState([
    {name : '황창조',
    role : 'FE / Leader'},
    {name : '정준희',
    role : 'FE'},
    {name : '박정민',
    role : 'BE'},
    {name : '박건률',
    role : 'BE'},
  ])



  return (
    <div>
      <div className="flex flex-col items-center justify-start">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button
          onClick={() => {
            navigate('/loading');
          }}
        >
          가이드라인 생성
        </Button>
      </div>
  
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TIL HISTORY
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              동해물과 백두산이 마르고 닳도록
            </p>
          </div>
  
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {member.map((a, i) => (
              <li key={i}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {a.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {a.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
  
      <Heattmap />
    </div>
  );
};

export default Home;

