import { useQuery } from '@tanstack/react-query';

import api from '../api';
import { type CompetitionMatchesProps } from './competitions.interface';

interface CompetitionProps {
  id?: string;
}

export const getCompetitionMatchesData = ({ id }: CompetitionProps) => {
  const { data: competitionMatchesData } = useQuery({
    enabled: !!id,
    queryKey: ['competitionMatchesData', id],
    queryFn: async () => {
      const { data } = await api.get<CompetitionMatchesProps>(
        `/v4/competitions/${id}/matches`,
      );

      return data;
    },
  });

  return { competitionMatchesData };
};
