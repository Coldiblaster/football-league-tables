import React, { Fragment } from 'react';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

import { Text } from '@/components/Typography';

interface Team {
  crest: string;
  name: string;
}

interface Match {
  id: number;
  matchday: number;
  homeTeam: Team;
  awayTeam: Team;
}

export const MatchesList: React.FC<{
  matches: Match[];
  direction: 'left' | 'right';
}> = ({ matches, direction }) => (
  <div className="flex flex-col">
    {matches.map(({ homeTeam, awayTeam, id }) => (
      <Fragment key={id}>
        <div
          className={`
            flex w-full items-center justify-center gap-2 border-b border-primary-medium py-3
            ${direction === 'left' ? 'animate-fade-left' : 'animate-fade-right'}
          `}
        >
          <div className="flex w-[140px] items-center justify-end gap-6 md:w-[220px]">
            <Text as="500" variant="primary" className="truncate">
              {homeTeam.name}
            </Text>
            <Image
              src={homeTeam.crest}
              alt={`Emblema do clube ${homeTeam.name}`}
              width={32}
              height={32}
              className=" brightness-110"
              quality={100}
            />
          </div>
          <MdClose className="text-white" size={18} />
          <div className="flex w-[140px] flex-row-reverse items-center justify-end gap-6 md:w-[220px]">
            <Text as="500" variant="primary" className="truncate">
              {awayTeam.name}
            </Text>
            <Image
              src={awayTeam.crest}
              alt={`Emblema do clube ${awayTeam.name}`}
              width={32}
              height={32}
              className=" brightness-110"
              quality={100}
            />
          </div>
        </div>
      </Fragment>
    ))}
  </div>
);
