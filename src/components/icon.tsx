/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import { type IconBaseProps } from 'react-icons/lib';
import * as MdIcon from 'react-icons/md';
import * as IoIcon from 'react-icons/io';
import { match, P } from 'ts-pattern';

export type IconName = keyof typeof MdIcon | keyof typeof IoIcon;

export type IconProps = IconBaseProps & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const element = match(name)
    .with(P.string.startsWith('Md'), icon => MdIcon[icon])
    .with(P.string.startsWith('Io'), icon => IoIcon[icon])
    .otherwise(() => React.Fragment);

  return React.createElement(element, props);
}
