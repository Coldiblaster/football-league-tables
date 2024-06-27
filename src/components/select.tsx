'use client';

import * as SelectRadix from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';
import Image from 'next/image';

import { Text } from './Typography';
import { Icon } from './icon';

export interface SelectOptionsProps {
  value: string;
  children: string | JSX.Element;
  image?: string;
  code?: string;
}

export type SelectProps = SelectRadix.SelectProps & {
  list: SelectOptionsProps[];
  placeholder: string;
  error?: string;
  classNameBody?: string;
  classNameContainer?: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export const Select = ({
  list,
  placeholder,
  classNameBody,
  onValueChange,
  error,
  disabled,
  isLoading,
  classNameContainer,
  ...rest
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${classNameContainer} relative flex flex-col gap-1`}>
      <SelectRadix.Root
        defaultOpen={open}
        onOpenChange={() => {
          setOpen(!open);
        }}
        onValueChange={e => {
          onValueChange(e);
        }}
        disabled={disabled}
        {...rest}
      >
        <SelectRadix.Trigger
          className={`
              inline-flex h-12 w-full items-center
              justify-center gap-[5px] rounded-3xl
              border-2 border-primary-dark text-xs leading-none text-primary-medium
              outline-none hover:border-primary-lightest hover:opacity-80 disabled:cursor-not-allowed
              disabled:border-primary-dark disabled:opacity-50 data-[placeholder]:text-primary-medium
              md:min-w-[300px] md:text-base
            `}
        >
          <SelectRadix.Value placeholder={placeholder} />

          <SelectRadix.Icon className="text-primary-medium">
            {isLoading ? (
              <svg
                aria-hidden="true"
                className="h-4 w-4 animate-spin fill-primary-medium text-neutral-dark"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <Icon
                name="MdKeyboardArrowDown"
                size={24}
                className={
                  open
                    ? '-rotate-180 transition-transform duration-[250] ease-in'
                    : 'transition-transform duration-[250] ease-in'
                }
              />
            )}
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content
            position="popper"
            align="center"
            className={`
                ${classNameBody} flex overflow-hidden rounded-lg bg-neutral-300 px-4 py-4 shadow-2xl
              `}
          >
            <SelectRadix.ScrollUpButton className="flex h-[40px] cursor-default items-center justify-center bg-neutral-300 text-primary-medium">
              <ChevronUpIcon className="h-[16px] w-[16px]" />
            </SelectRadix.ScrollUpButton>
            <SelectRadix.Viewport className="flex max-h-[600px] w-full flex-col gap-2 rounded-2xl bg-neutral-300 p-4">
              {list.map(({ value, children, image, code }) => (
                <SelectItem key={value} value={value} image={image} code={code}>
                  <div className="flex items-center gap-2 py-2 !text-sm leading-none text-primary-medium md:gap-4 md:text-base">
                    {image && (
                      <Image
                        src={image}
                        alt="Logo do campeonato"
                        width={32}
                        height={32}
                        quality={100}
                      />
                    )}
                    {code && (
                      <Text as="500" variant="secondary">
                        {code}
                      </Text>
                    )}
                    {children}
                  </div>
                </SelectItem>
              ))}
            </SelectRadix.Viewport>
            <SelectRadix.ScrollDownButton className="flex h-[40px] cursor-default items-center justify-center bg-neutral-300 text-primary-medium">
              <ChevronDownIcon className="h-[16px] w-[16px]" />
            </SelectRadix.ScrollDownButton>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>

      {error && (
        <Text
          as="400"
          className="text-secondary-medium ml-16 text-2xl"
          title={error}
        >
          {error}
        </Text>
      )}
    </div>
  );
};

const SelectItem = ({ children, value, image, code }: SelectOptionsProps) => {
  return (
    <SelectRadix.Item
      className={`
        relative flex cursor-pointer select-none items-center gap-2
        border-b border-primary-dark py-1 !text-[1px] leading-none text-primary-medium hover:opacity-60
        data-[disabled]:pointer-events-none data-[highlighted]:text-primary-lightest
        data-[highlighted]:outline-none md:text-sm
      `}
      value={value}
    >
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      <SelectRadix.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  );
};
