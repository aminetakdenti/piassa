import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

export default function IconButton({ children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={twMerge(
        'h-[50px] w-[50px] rounded-md flex items-center justify-center bg-primary',
        className,
      )}
    >
      {children}
    </button>
  );
}
