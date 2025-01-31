'use client';
import Image from 'next/image';

export default function SearchInput() {
  return (
    <div className='w-[466px] h-12 flex items-center p-[10px] bg-[#00000059] rounded-md space-x-3 backdrop-blur-xl'>
      <Image src='/piassa_icon.svg' width={25} height={26} alt='icon' />
      <div className='flex flex-1 flex-row h-full items-center space-x-1'>
        <div className='h-[25px] w-[1px] bg-white' />
        <input
          type='text'
          className='flex-1 h-full w-full placeholder:font-bold placeholder:text-[13.35px] placeholder:text-white placeholder:leading-[18.22px] placeholder:bg-transparent bg-transparent text-white text-[13.35px] leading-[18.22px] font-bold caret-white ps-1 border-0 outline-none'
          placeholder='Recherche'
        />
      </div>
    </div>
  );
}
