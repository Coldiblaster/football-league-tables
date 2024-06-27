'use client';

import React, { useEffect, useState } from 'react';

import { Heading } from '@/components/Typography';

import { NavigationArrows } from './navigationArrows';
import { MatchesList } from './matchesList';

interface Team {
  crest: string;
  name: string;
}

export interface Match {
  id: number;
  matchday: number;
  homeTeam: Team;
  awayTeam: Team;
}

interface CompetitionMatchesData {
  matches?: Match[];
  competitionName: string;
}

interface CompetitionMatchesProps {
  competitionMatchesData: CompetitionMatchesData;
  matchDaySelected?: number;
}

export const CompetitionMatches: React.FC<CompetitionMatchesProps> = ({
  competitionMatchesData,
  matchDaySelected,
}) => {
  const [currentMatchday, setCurrentMatchday] = useState<number>(
    matchDaySelected || 1,
  );
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  useEffect(() => {
    setCurrentMatchday(1);
  }, [competitionMatchesData.matches]);

  useEffect(() => {
    if (matchDaySelected) setCurrentMatchday(matchDaySelected);
  }, [matchDaySelected]);

  if (!competitionMatchesData.matches) {
    return null;
  }

  const matchesByMatchday = competitionMatchesData.matches.reduce<
    Record<number, Match[]>
  >((acc, match) => {
    (acc[match.matchday] = acc[match.matchday] || []).push(match);
    return acc;
  }, {});

  const matchdays = Object.keys(matchesByMatchday).map(Number);
  const maxMatchday = Math.max(...matchdays);

  const handleNext = () => {
    if (currentMatchday < maxMatchday) {
      setDirection('left');
      setCurrentMatchday(currentMatchday + 1);
    }
  };

  const handlePrev = () => {
    if (currentMatchday > 1) {
      setDirection('right');
      setCurrentMatchday(currentMatchday - 1);
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-4">
      <Heading as="h4" variant="secondary">
        {competitionMatchesData.competitionName}
      </Heading>

      <div className="flex flex-col gap-4 transition-all duration-500">
        <NavigationArrows
          currentMatchday={currentMatchday}
          maxMatchday={maxMatchday}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {matchesByMatchday[currentMatchday] && (
          <MatchesList
            matches={matchesByMatchday[currentMatchday]}
            direction={direction}
          />
        )}
      </div>
    </div>
  );
};
