import { type ComponentProps, createElement } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

export interface IHeadingProps extends ComponentProps<'h1'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'primary' | 'secondary';
}

const headingStyles = cva('font-bold', {
  variants: {
    as: {
      h1: 'text-2xl md:text-5xl',
      h2: 'text-2xl md:text-4xl',
      h3: 'text-xl md:text-3xl',
      h4: 'text-2xl',
      h5: 'text-xl',
      h6: 'text-lg',
    },
    variant: {
      primary: 'text-white',
      secondary: 'text-primary-medium',
    },
  },
});

export const Heading = ({
  as = 'h2',
  variant = 'primary',
  className,
  ...props
}: IHeadingProps) => {
  return createElement(as, {
    ...props,
    className: clsx(headingStyles({ as, variant }), className),
  });
};
