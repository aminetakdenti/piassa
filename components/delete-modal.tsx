import Image from 'next/image';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DeleteModal({ isOpen, onClose }: Props) {
  return (
    <div
      className={`inset-0 z-50 flex items-center justify-center backdrop-blur-md ${
        isOpen ? 'fixed' : 'hidden'
      }`}
    >
      <div>
        <div
          className='bg-white/70 rounded-[20.18px] p-6 flex flex-col items-center space-y-8 w-[361.22px] shadow-[0px_13.45px_10.09px_0px_rgba(0,0,0,0.05)] 
           backdrop-blur-[168px]'
        >
          <Image src='/question_icon.svg' width={62} height={62} alt='icon' />
          <h2 className='text-[23.22px] font-semibold text-center leading-[30.96px]'>
            Are you sure you want to delete?
          </h2>
          <p className='font-normal text-lg leading-[28.38px]'>
            Please do not close this page
          </p>
          <div className='flex justify-center'>
            <button
              className='px-[30.96px] py-[15.48px] bg-primary text-secondary bg-white rounded-lg mr-4 border border-[#FF3D0080] font-medium text-[20.46px] leading-[30.96px]'
              onClick={onClose}
            >
              Yes
            </button>
            <button
              className='px-[30.96px] py-[15.48px] bg-primary text-white bg-[#44536F] rounded-lg font-medium text-[20.46px] leading-[30.96px]'
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
