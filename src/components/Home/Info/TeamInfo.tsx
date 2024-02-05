// TeamInfo.jsx 또는 TeamInfo.tsx
import TeamItem from '@components/Team/TeamItem.tsx';
import { useEffect } from 'react';
import useTeamListQuery from '@hooks/useTeamListQuery.ts';
import { useQueryClient } from '@tanstack/react-query';
import { cockPush } from '@api/FirebaseApi.ts';

interface MemberListResponse {
  id: string;
  name: string;
  profileImage: string;
  status: string;
  tilScore: number;
}

const TeamInfo = () => {
  const queryClient = useQueryClient();
  const teamListData = useTeamListQuery();

  useEffect(() => {
    // 데이터 로딩 완료를 확인합니다.
    if (!teamListData.isLoading && !teamListData.isError) {
      const eventSource = new EventSource(`/api/team/team.status`);

      eventSource.onmessage = (event) => {
        let newStatusData = JSON.parse(event.data);
        newStatusData = newStatusData.data;

        queryClient.setQueryData(['teamList'], (oldTeams: any[]) => {
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
  }, [queryClient, teamListData]);

  const handlePoke = async (memberId: number, body?: string) => {
    const pusher = localStorage.getItem('userName');
    if (pusher !== null) {
      await cockPush(memberId, pusher, body);
      console.log(`${pusher}가 ${memberId}를 콕 찔렀습니다.`);
      // 콕 찌르기 로직 구현
    }
  };

  const handleCheer = async (memberId: number) => {
    const message = prompt('응원 메시지를 입력하세요:');
    if (message !== null) handlePoke(memberId, message);
  };

  if (teamListData.isLoading) return <div>Loading...</div>;
  if (teamListData.isError) return <div>Error loading teams</div>;

  return (
    <div className="contents-container">
      <p className="text-center text-2xl font-bold">이달의 우수 정원사</p>
      <div className="grid grid-cols-2 gap-5">
        {teamListData.data.map((data: MemberListResponse, index: number) => (
          <div className="flex flex-col items-center" key={index}>
            <TeamItem
              key={data.id}
              name={data.name}
              tilScore={data.tilScore}
              status={data.status}
              profileImage={data.profileImage}
              onPoke={() => handlePoke(Number(data.id))}
              cheerUp={() => handleCheer(Number(data.id))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamInfo;

// // import NavBar from '@components/Common/NavBar';
// // import Editor from '@components/Edit/Editor';
// // import Header from '@/components/Edit/Header';
//
// import { useEffect, useState } from 'react';
//
// const TeamInfo = () => {
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
// export default TeamInfo;
