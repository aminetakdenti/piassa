import Image from 'next/image';
import { Dispatch, HTMLAttributes } from 'react';

type Props = {
  isOpend: boolean;
  setIsOpend: Dispatch<boolean>;
  data: readonly { id: number; name: string }[];
  selectedItem: string | null;
  setSelectedItem: Dispatch<string>;
} & HTMLAttributes<HTMLButtonElement>;

const PLACEHOLDER = 'Select Wilaya';

export default function DropDown({
  isOpend,
  setIsOpend,
  data,
  setSelectedItem,
  selectedItem,
  ...rest
}: Props) {
  const onDropDownItemClick = (item: { id: number; name: string }) => {
    setSelectedItem(item.name);
  };

  return (
    <button
      id="drop-down"
      className={`h-12 w-40 relative flex items-center justify-between px-[10px] space-x-[10px] backdrop-blur-xl ${
        isOpend ? 'bg-[#FFFBFBE5]' : 'bg-[#00000059]'
      } ${isOpend ? 'rounded-b-none rounded-t-md' : 'rounded-md'}`}
      role='button'
      onClick={() => {
        setIsOpend(!isOpend);
      }}
      {...rest}
    >
      {isOpend ? (
        <Image src={require('../public/map_pin_icon_dark.svg')} alt='icon' />
      ) : (
        <Image src={require('../public/map_pin_icon.svg')} alt='icon' />
      )}

      <p
        className={`font-medium text-[12px] leading-[14.52px] ${
          isOpend ? 'text-[#44536F]' : ' text-white'
        }`}
      >
        {selectedItem || PLACEHOLDER}
      </p>

      {isOpend ? (
        <Image src={require('../public/down_arrow_icon_dark.svg')} alt='icon' />
      ) : (
        <Image src={require('../public/down_arrow_icon.svg')} alt='icon' />
      )}

      <div
        className={`absolute top-full right-0 h-60 w-full overflow-x-hidden overflow-y-scroll rounded-b-md ${
          !isOpend && 'hidden'
        }`}
      >
        {data?.map(ele => (
          <button
            key={ele.id}
            className='block p-[10px] text-center w-full  bg-[#FFFBFBE5] hover:bg-secondary hover:text-white'
            onClick={() => onDropDownItemClick(ele)}
          >
            {ele.name}
          </button>
        ))}
      </div>
    </button>
  );
}
