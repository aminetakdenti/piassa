import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = HTMLAttributes<HTMLInputElement> & {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  className,
  type,
  name,
  placeholder,
  value,
  onChange,
  ...rest
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={twMerge(
        'h-[45px] w-full border border-[#CACED8] rounded-lg px-3 focus:border-secondary outline-none shadow-lg',
        className,
      )}
      {...rest}
    />
  );
}
