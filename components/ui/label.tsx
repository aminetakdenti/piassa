import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
  htmlFor: string;
} & HTMLAttributes<HTMLLabelElement>;

export default function Label({
  children,
  className,
  htmlFor,
  ...rest
}: Props) {
  return (
    <label
      className={twMerge(
        'font-bold text-[16.37px] leading-[20.06px] text-[#44536F]',
        className,
      )}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  );
}
