// Team.jsx 또는 Team.tsx
import TeamItem from '@components/Team/TeamItem.tsx';
import { useEffect, useState } from 'react';
import useTeamListQuery from '@hooks/useTeamListQuery.ts';
import { useQueryClient } from '@tanstack/react-query'; // 경로는 실제 위치에 맞게 조정

const Team = () => {
  const queryClient = useQueryClient();
  const { data: teams, isLoading, isError } = useTeamListQuery();

  useEffect(() => {
    // 데이터 로딩 완료를 확인합니다.
    if (!isLoading && !isError) {
      const eventSource = new EventSource(`/api/team/team.status`);

      eventSource.onmessage = (event) => {
        let newStatusData = JSON.parse(event.data);
        newStatusData = newStatusData.data;

        queryClient.setQueryData(['teamList'], (oldTeams) => {
          // oldTeams가 null이거나 undefined가 아닌지 확인합니다.
          if (!oldTeams) return [];
          return oldTeams.map((member) => {
            if (newStatusData[member.id]) {
              return { ...member, status: newStatusData[member.id] };
            }
            return member;
          });
        });
      };

      return () => {
        eventSource.close();
      };
    }
  }, [queryClient, isLoading, isError]);

  const handlePoke = (memberId) => {
    console.log(`${memberId}가 콕 찌르기 당했습니다.`);
    // 콕 찌르기 로직 구현
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading teams</div>;

  return (
    <div className="w-screen pr-10">
      <div className="contents-container">
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
          {teams.map((member) => (
            <TeamItem
              key={member.id}
              name={member.name}
              role="동료"
              status={member.status}
              profileImage={member.profileImage}
              onPoke={() => handlePoke(member.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;


// // import NavBar from '@components/Common/NavBar';
// // import Editor from '@components/Edit/Editor';
// // import Header from '@/components/Edit/Header';
//
// import { useEffect, useState } from 'react';
//
// const Team = () => {
//   const [events, setEvents] = useState([]);
//
//   useEffect(() => {
//     const userId = '1'; // 사용자 ID를 적절히 설정하세요.
//     // const eventSource = new EventSource(`/api/team/status?userId=${userId}`);
//     const eventSource = new EventSource(`/api/team/team.status`);
//
//     eventSource.onmessage = (event) => {
//       // const newEvent = JSON.parse(event.data);
//       // console.log('accept : ' , newEvent)
//       console.log(event);
//       // setEvents(prevEvents => [...prevEvents, newEvent]);
//     };
//
//
//     // 1. 사용자가 접속시 서버에게 전달 (시점이 언젠데? ) -> 서버는 받고 사용자를 레디스에 저장 ->
//     // 우선 팀프로필 볼 때, 작성완료, 미완료 기준으로 상태값을 쭉 넣고
//     // 그 다음 SSE
//     eventSource.addEventListener(`team_${userId}_status`, function(messageEvent) {
//       // const eventData = JSON.parse(messageEvent.data);
//       console.log('Received event:', messageEvent);
//       // setEvents(prevEvents => [...prevEvents, eventData]);
//     });
//
//     eventSource.onerror = (error) => {
//       console.error('EventSource failed:', error);
//       eventSource.close();
//     };
//
//     return () => {
//       eventSource.close();
//     };
//   }, []);
//
//   return (
//     <div className="w-screen pr-10">
//       <div className="contents-container">
//         <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
//           <li>
//             <div className="flex items-center gap-x-6">
//               <div className="flex flex-col items-center">
//                 <img className="h-16 w-16 rounded-full"
//                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                      alt="Leslie Alexander" />
//                 <span className="mt-2 px-3 py-1 text-sm text-white bg-green-500 rounded-full">작성완료</span>
//               </div>
//               <div>
//                 <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
//                 <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
//                 {/* 콕 찌르기 버튼 */}
//                 <button
//                   className="mt-2 flex items-center px-2 py-1 bg-blue-500 text-white text-xs leading-5 font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                   <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                     {/* SVG path for example. Replace with your desired icon */}
//                     <path d="M..."></path>
//                   </svg>
//                   콕 찌르기
//                 </button>
//               </div>
//             </div>
//           </li>
//
//
//           <li>
//             <div className="flex items-center gap-x-6">
//               <div className="flex flex-col items-center relative">
//                 <img className="h-16 w-16 rounded-full border-2 border-red-500"
//                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                      alt="Leslie Alexander" />
//                 <spang className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full">LIVE</spang>
//                 <span className="mt-2 px-3 py-1 text-sm text-white bg-red-500 rounded-full">작성중</span>
//               </div>
//               <div>
//                 <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
//                 <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
//                 {/* 콕 찌르기 버튼 ... */}
//
//                 <button
//                   className="mt-2 flex items-center px-2 py-1 bg-blue-500 text-white text-xs leading-5 font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                   <svg className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                     {/* SVG path for example. Replace with your desired icon */}
//                     <path d="M..."></path>
//                   </svg>
//                   콕 찌르기
//                 </button>
//
//               </div>
//             </div>
//           </li>
//
//
//           {/* 다른 사용자 카드... */}
//         </ul>
//       </div>
//     </div>
//
//   );
// };
//
// export default Team;
