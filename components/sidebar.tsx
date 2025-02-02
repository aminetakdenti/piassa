import Image from 'next/image';
import IconButton from './icon-button';

export default function Sidebar() {
  return (
    <div className='fixed top-0 left-0 bottom-0 w-32 bg-white/10 backdrop-blur-xl flex flex-col items-center z-20'>
      <Image
        src='/piassa_logo.svg'
        width={115}
        height={40}
        alt='icon'
        className='mt-10'
      />

      <div className='rounded-[400px] p-1 border border-[#FFFFFF33] mt-8'>
        <IconButton className='rounded-t-[400px] h-12 w-12 bg-secondary'>
          <Image src='/hand_icon.svg' width={24} height={24} alt='icon' />
        </IconButton>

        <IconButton className='rounded-b-[400px] h-12 w-12'>
          <Image src='/screen_icon.svg' width={24} height={24} alt='icon' />
        </IconButton>
      </div>

      <div className='h-[437] flex flex-col items-center justify-between mt-6'>
        <div className='space-y-4 flex flex-col items-center'>
          <div className='w-[29px] h-[1px] bg-secondary' />

          <IconButton>
            <Image src='/hand_icon.svg' width={32} height={32} alt='icon' />
          </IconButton>

          <IconButton>
            <Image src='/category_icon.svg' width={32} height={32} alt='icon' />
          </IconButton>

          <IconButton>
            <Image src='/car_icon.svg' width={28} height={34} alt='icon' />
          </IconButton>

          <IconButton>
            <Image src='/setting_icon.svg' width={30} height={30} alt='icon' />
          </IconButton>
          <div className='w-[29px] h-[1px] bg-secondary' />
        </div>

        <IconButton className='self-end'>
          <Image src='/logout_icon.svg' width={30} height={30} alt='icon' />
        </IconButton>
      </div>
    </div>
  );
}
