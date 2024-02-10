// TeamInfo.jsx 또는 TeamInfo.tsx
import TeamItem from '@components/Team/TeamItem.tsx';
import { useEffect } from 'react';
import useTeamListQuery from '@hooks/useTeamListQuery.ts';
import { useQueryClient } from '@tanstack/react-query';
import { cockPush } from '@api/FirebaseApi.ts';
import { round } from 'lodash';
import { Flipped, Flipper } from 'react-flip-toolkit';

// Enum for status priorities
enum StatusPriority {
  written = 1,
  writing = 2,
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

  useEffect(() => {
    const eventSource = new EventSource(`/api/team/team.status`);

    eventSource.onmessage = (event) => {
      const newStatusData = JSON.parse(event.data)?.data;

      queryClient.setQueryData(['teamList'], (oldTeams?: MemberListResponse[]) => {
        const updatedTeams =
          oldTeams
            ?.map((member) => {
              const isUpdated =
                newStatusData[member.id] !== undefined &&
                member.status !== newStatusData[member.id];
              if (isUpdated) {
                setTimeout(() => {
                  queryClient.setQueryData(
                    ['teamList'],
                    (currentTeams?: MemberListResponse[]) =>
                      currentTeams?.map((currentMember) => {
                        if (currentMember.id === member.id) {
                          return { ...currentMember, highlight: false };
                        }
                        return currentMember;
                      }) || [],
                  );
                }, 2000); // Adjusted to 2 seconds as per your code, though you mentioned 5 seconds initially
              }

              return {
                ...member,
                status: isUpdated ? newStatusData[member.id] : member.status,
                highlight: isUpdated,
              };
            })
            ?.sort(sortTeamMembers) || [];

        return updatedTeams;
      });
    };

    return () => eventSource.close();
  }, [queryClient]);

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
        <p className="TTLFont pb-3 text-center text-2xl font-bold">이달의 우수 정원사</p>
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
