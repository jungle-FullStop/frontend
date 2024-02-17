// TeamInfo.jsx 또는 TeamInfo.tsx
import TeamItem from '@components/Team/TeamItem.tsx';
import { useEffect } from 'react';
import useTeamListQuery from '@hooks/Team/useTeamListQuery.ts';
import { useQueryClient } from '@tanstack/react-query';
import { cockPush } from '@api/FirebaseApi.ts';
import { round } from 'lodash';
import { Flipped, Flipper } from 'react-flip-toolkit';

// Enum for status priorities
enum StatusPriority {
  written = 2,
  writing = 1,
  not_written = 3,
}

// Interface for member list response
interface MemberListResponse {
  id: string;
  name: string;
  profileImage: string;
  status: keyof typeof StatusPriority;
  tilScore: number;
  highlight?: boolean;
}

// Sort function for team members
const sortTeamMembers = (a: MemberListResponse, b: MemberListResponse): number => {
  return StatusPriority[a.status] - StatusPriority[b.status];
};

const TeamInfo = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data: teamListData } = useTeamListQuery();

  const updateTeamMembersStatus = (newStatusData: Record<string, keyof typeof StatusPriority>) => {
    queryClient.setQueryData(['teamList'], (oldTeams?: MemberListResponse[]) => {
      const updatedTeams = oldTeams
        ?.map((member) => {
          let newStatus = newStatusData[member.id];
          // isNotWritten : 작성중인 상태인데 받아온 데이터에는 없을 경우( 사용자가 머물지 않았음 )
          const isNotWritten = !newStatus && member.status === 'writing';
          const isUpdated = (newStatus && member.status !== newStatus) || isNotWritten;
          // const isUpdated = newStatus && member.status !== newStatus;
          if (isNotWritten) newStatus = 'not_written';
          if (isUpdated) {
            console.log('isUpdated', isUpdated, member);
            // Reset highlight after 2 seconds
            setTimeout(() => {
              queryClient.setQueryData(
                ['teamList'],
                (currentTeams?: MemberListResponse[]) =>
                  currentTeams?.map((currentMember) => ({
                    ...currentMember,
                    highlight: currentMember.id === member.id ? false : currentMember.highlight,
                  })) || [],
              );
            }, 2000);
          }

          return {
            ...member,
            status: isUpdated ? newStatus : member.status,
            highlight: isUpdated,
          };
        })
        .sort(sortTeamMembers);

      console.log(updatedTeams);
      return updatedTeams;
    });
  };

  useEffect(() => {
    const eventSource = new EventSource(`/api/team/team.status`);

    eventSource.onmessage = (event) => {
      const newStatusData = JSON.parse(event.data)?.data;
      updateTeamMembersStatus(newStatusData);
    };

    return () => eventSource.close();
  }, []);

  // Handle poke and cheer actions
  const handlePoke = async (memberId: string, body?: string) => {
    const pusher = localStorage.getItem('userName');
    if (pusher) {
      try {
        await cockPush(memberId, pusher, body);
        console.log(`${pusher}가 ${memberId}를 콕 찔렀습니다.`);
      } catch (error) {
        console.error('Poke operation failed', error);
      }
    }
  };

  const handleCheer = async (memberId: string) => {
    const message = prompt('응원 메시지를 입력하세요:');
    if (message) await handlePoke(memberId, message);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading teams</div>;

  const teamTotalScore = teamListData
    .map((data: MemberListResponse) => data.tilScore)
    .reduce((acc: number, cur: number) => acc + cur, 0);

  return (
    <Flipper flipKey={teamListData?.map((item: { id: any }) => item.id).join('')}>
      <div className="teaminfo-container">
        <p className="TILFont pb-3 text-center text-2xl font-bold">
          이달의 <span className={'text-green-500'}>우수</span> 정원사
        </p>
        <div className="grid grid-cols-3 gap-5">
          {teamListData?.sort(sortTeamMembers).map((member: MemberListResponse) => (
            // Wrap each item in a Flipped component for individual animation
            <Flipped key={member.id} flipId={member.id}>
              <div className="flex flex-col items-center">
                <TeamItem
                  name={member.name}
                  tilRatio={round((member.tilScore / teamTotalScore) * 100, 0)}
                  status={member.status}
                  profileImage={member.profileImage}
                  onPoke={() => handlePoke(member.id)}
                  cheerUp={() => handleCheer(member.id)}
                  highlight={member.highlight}
                />
              </div>
            </Flipped>
          ))}
        </div>
      </div>
    </Flipper>
  );
};
export default TeamInfo;
