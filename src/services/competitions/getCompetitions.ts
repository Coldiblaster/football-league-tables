import { useQuery } from '@tanstack/react-query';

import api from '../api';
import { type CompetitionsProps } from './competitions.interface';

export const getCompetitionsData = () => {
  const { data: competitionsData, isLoading: isLoadingCompetitions } = useQuery(
    {
      queryKey: ['competitionsData'],
      queryFn: async () => {
        const { data } = await api.get<CompetitionsProps>('/v4/competitions');

        return data;
      },
    },
  );

  return { competitionsData, isLoadingCompetitions };
};
