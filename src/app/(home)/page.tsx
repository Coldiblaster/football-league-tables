'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  type CompetitionProps,
  getCompetitionsData,
} from '@/services/competitions';
import { getCompetitionTeamsData } from '@/services/competitions/getCompetitionTeams';
import { getCompetitionMatchesData } from '@/services/competitions/getCompetitionMatches';
import { getCompetitionTeamData } from '@/services/competitions/getCompetitionTeam';

import { Heading } from '@/components/Typography';
import { Select, type SelectOptionsProps } from '@/components/select';
import {
  CompetitionMatches,
  type Match,
} from '@/components/competition/competitionMatches';

export default function Home() {
  const [selectValue, setSelectValue] = useState('');
  const [selectTeam, setSelectTeam] = useState('');
  const [selectMatchDay, setSelectMatchDay] = useState('');
  const [competitionList, setCompetitionList] = useState<SelectOptionsProps[]>(
    [],
  );
  const [teamsList, setTeamsList] = useState<SelectOptionsProps[]>([]);
  const [matchDaysList, setMatchDaysList] = useState<SelectOptionsProps[]>([]);
  const [competition, setCompetition] = useState<CompetitionProps>();

  const { competitionsData, isLoadingCompetitions } = getCompetitionsData();
  const { competitionTeamsData, isLoadingTeams } = getCompetitionTeamsData({
    id: selectValue,
  });
  const { competitionMatchesData } = getCompetitionMatchesData({
    id: selectValue,
  });
  const { competitionTeamData, isLoadingTeam } = getCompetitionTeamData({
    id: selectTeam,
  });

  useEffect(() => {
    if (competitionsData) {
      setCompetitionList(
        competitionsData.competitions.map(item => ({
          value: String(item.id),
          children: item.name,
          image: item.area.flag || item.emblem,
          code: item.code,
        })),
      );
    }
  }, [competitionsData]);

  useEffect(() => {
    if (competitionsData) {
      setCompetition(
        competitionsData?.competitions.find(
          ({ id }) => String(id) === selectValue,
        ),
      );
      setSelectTeam('');
      setSelectMatchDay('');
    }
  }, [selectValue]);

  useEffect(() => {
    if (competitionTeamsData) {
      setTeamsList(
        competitionTeamsData.teams.map(item => ({
          value: String(item.id),
          children: item.name,
          image: item.crest,
        })),
      );
    }
  }, [competitionTeamsData]);

  useEffect(() => {
    if (competitionMatchesData) {
      const matchesByMatchday = competitionMatchesData.matches.reduce<
        Record<number, Match[]>
      >((acc, match) => {
        (acc[match.matchday] = acc[match.matchday] || []).push(match);
        return acc;
      }, {});

      setMatchDaysList(
        Object.keys(matchesByMatchday).map(item => ({
          value: item.toString(),
          children: `Rodada ${item}`,
        })),
      );
    }
  }, [competitionMatchesData]);

  return (
    <div className="bg-gradient-primary min-h-full w-full">
      <div className="container mx-auto flex flex-col items-center py-8">
        <Heading as="h4" variant="secondary" className="text-center">
          Escolha Seu Campeonato e Confira a Tabela de Jogos
        </Heading>

        <div className="mt-8 flex w-[340px] flex-col justify-center gap-4 xl:flex-row 2xl:w-full">
          <Select
            classNameContainer="w-full 2xl:w-[400px]"
            classNameBody="xl:w-[400px]"
            list={competitionList}
            placeholder="Selecione o campeonato"
            onValueChange={setSelectValue}
            disabled={competitionList.length === 0}
            isLoading={isLoadingCompetitions}
          />

          <Select
            classNameContainer="w-full xl:w-[400px]"
            classNameBody="xl:w-[400px]"
            list={teamsList}
            placeholder="Selecione a Equipe"
            onValueChange={setSelectTeam}
            disabled={!competitionTeamsData}
            isLoading={isLoadingTeams}
          />

          <Select
            classNameContainer="w-full xl:w-[400px]"
            classNameBody="min-w-[320px] xl:w-[400px]"
            list={matchDaysList}
            placeholder="Selecione a rodada"
            onValueChange={setSelectMatchDay}
            disabled={matchDaysList.length === 0}
            isLoading={isLoadingTeams}
          />
        </div>

        {competition ? (
          <>
            {isLoadingTeams || isLoadingTeam ? (
              <div className="mt-4 flex flex-col gap-4 text-center">
                <Heading as="h4" variant="secondary">
                  {competition.name}
                </Heading>
                <div
                  className={`
                    ${isLoadingTeams ? 'h-[625px]' : 'h-[105px] '}
                    w-[314px] animate-pulse rounded-3xl bg-black/30 md:w-[474px]
                `}
                />
              </div>
            ) : (
              <CompetitionMatches
                matchDaySelected={Number(selectMatchDay)}
                competitionMatchesData={{
                  competitionName: competition.name,
                  matches:
                    selectTeam.length > 0
                      ? competitionTeamData?.matches
                      : competitionMatchesData?.matches,
                }}
              />
            )}
          </>
        ) : (
          <Image
            src="/images/soccer-bro.svg"
            alt="Ilustração contendo pessoas jogando bola"
            width={600}
            height={600}
          />
        )}
      </div>
    </div>
  );
}
