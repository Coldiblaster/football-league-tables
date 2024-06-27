/* eslint-disable prettier/prettier */
import { type ComponentProps, createElement } from 'react';
import { cva } from 'class-variance-authority';

export interface ITextProps extends ComponentProps<'span'> {
  as?: '300' | '400' | '500';
  variant?: 'primary' | 'secondary';
}

export const Text = (props: ITextProps) => {
  return createElement('span', {
    ...props,
    className: cva(
      [props.className, !props.variant ? 'text-neutral-darkest' : '', 'text-xs md:text-base'],
      {
        variants: {
          as: {
            '300': '!font-light',
            '400': '!font-normal',
            '500': '!font-medium ',
          },
          variant: {
            primary: 'text-white',
            secondary: 'text-primary-medium',
          },
        },
      },
    )({
      as: props.as,
      variant: props.variant,
    }),
  });
};
