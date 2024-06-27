import { useQuery } from '@tanstack/react-query';

import api from '../api';
import { type CompetitionTeamsProps } from './competitions.interface';

interface CompetitionProps {
  id?: string;
}

export const getCompetitionTeamsData = ({ id }: CompetitionProps) => {
  const { data: competitionTeamsData, isLoading: isLoadingTeams } = useQuery({
    enabled: !!id,
    queryKey: ['competitionTeamData', id],
    queryFn: async () => {
      const { data } = await api.get<CompetitionTeamsProps>(
        `/v4/competitions/${id}/teams`,
      );

      return data;
    },
  });

  return { competitionTeamsData, isLoadingTeams };
};
