import React from 'react';

import { Heading } from '@/components/Typography';

import { Icon } from '../icon';

export const NavigationArrows: React.FC<{
  currentMatchday: number;
  maxMatchday: number;
  onPrev: () => void;
  onNext: () => void;
}> = ({ currentMatchday, maxMatchday, onPrev, onNext }) => (
  <div className="flex w-full justify-between">
    <button
      className={`
       flex h-8 w-8 items-center justify-center rounded-full bg-white
       text-primary-dark transition-all
        ${currentMatchday === 1 ? 'cursor-not-allowed opacity-40' : 'hover:bg-primary-lightest'}
      `}
      onClick={onPrev}
    >
      <Icon
        name="MdKeyboardArrowLeft"
        size={20}
        className="text-primary-medium"
      />
    </button>
    <Heading as="h6" variant="secondary">
      {currentMatchday}° Rodada
    </Heading>
    <div
      className={`
        flex h-8 w-8 cursor-pointer items-center justify-center
        rounded-full bg-white transition-all
        ${currentMatchday === maxMatchday ? 'cursor-not-allowed opacity-40' : 'hover:bg-primary-lightest'}
      `}
      onClick={onNext}
    >
      <Icon
        name="MdKeyboardArrowRight"
        size={20}
        className="text-primary-medium"
      />
    </div>
  </div>
);
