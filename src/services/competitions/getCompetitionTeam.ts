import { useQuery } from '@tanstack/react-query';

import api from '../api';
import { type CompetitionMatchesProps } from './competitions.interface';

interface CompetitionProps {
  id?: string;
}

export const getCompetitionTeamData = ({ id }: CompetitionProps) => {
  const { data: competitionTeamData, isLoading: isLoadingTeam } = useQuery({
    enabled: !!id,
    queryKey: ['competitionTeamData', id],
    queryFn: async () => {
      const { data } = await api.get<CompetitionMatchesProps>(
        `/v4/teams/${id}/matches`,
      );

      return data;
    },
  });

  return { competitionTeamData, isLoadingTeam };
};
