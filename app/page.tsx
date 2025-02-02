'use client';

import { Chart, DeleteModal, EditProfileForm, IconButton } from '@/components';
import { User } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

const tableHeader = [
  'name',
  'address',
  'phone',
  'start date',
  'store',
  'status',
  'specialty',
];

const tableRows: User[] = [
  {
    id: 1,
    profile: {
      fname: 'fname',
      lname: 'lname',
      email: 'email',
      password: 'password',
      phoneNumber01: 'phoneNumber01',
      phoneNumber02: 'phoneNumber02',
    },

    address: {
      wilaya: 'wilaya',
      commune: 'commune',
      address: 'address',
    },

    store: {
      storeName: 'storeName',
      specialty: 'specialty',
      startDate: 'startDate',
      storeId: 'store Id',
      dueDate: 'dueDate',
      refrence: 'refrence',
    },

    accountStatus: 'ON' as const,
    lastUpdate: 'lastUpdate',
  },
  {
    id: 2,
    profile: {
      fname: 'fname',
      lname: 'lname',
      email: 'email',
      password: 'password',
      phoneNumber01: 'phoneNumber01',
      phoneNumber02: 'phoneNumber02',
    },

    address: {
      wilaya: 'wilaya',
      commune: 'commune',
      address: 'address',
    },

    store: {
      storeName: 'storeName',
      specialty: 'specialty',
      startDate: 'startDate',
      storeId: 'store Id',
      dueDate: 'dueDate',
      refrence: 'refrence',
    },

    accountStatus: 'ON' as const,
    lastUpdate: 'lastUpdate',
  },
];

export default function Home() {
  const [showItem, setShowItem] = useState<(typeof tableRows)[number] | null>(
    null,
  );
  const [showEditProfile, setShowEditProfile] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onShowItem = (item: (typeof tableRows)[number]) => {
    if (!showItem) {
      setShowItem(item);
      return;
    }

    if (item.id === showItem.id) {
      setShowItem(null);
      setShowDetails(false);
      setShowEditProfile(false);
      return;
    }
    setShowItem(item);
  };

  const onShowEditProfile = () => {
    if (!showItem) {
      return;
    }

    setShowEditProfile(!showEditProfile);
  };

  const onShowDetails = () => {
    if (!showItem) {
      return;
    }

    setShowDetails(!showDetails);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='flex-1 z-10 overflow-y-scroll'>
      <DeleteModal isOpen={isModalOpen} onClose={onCloseModal} />
      <header className='mx-auto w-[1062px]'>
        <div className='flex justify-end'>
          <button className='flex items-center justify-between rounded-md w-[285px] h-12 bg-secondary text-white px-4 hover:bg-primary transition-colors duration-300'>
            Ajouter nouvel Partners
            <Image src={require('../public/plus_icon.svg')} alt='icon' />
          </button>
        </div>
      </header>

      <div className='mt-6 space-y-4 flex flex-col items-center transition-all duration-300 mb-8'>
        <div className='w-[1062px] flex justify-around items-center h-[71px] rounded-t-md px-4 bg-[#222F44CC]'>
          {tableHeader.map((header, index) => (
            <h3
              key={index}
              className='text-xl leading-[30px] font-semibold text-white'
            >
              {header}
            </h3>
          ))}
        </div>

        {tableRows.map((row, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='flex flex-row items-center space-x-5'>
              <div className='relative min-h-[100px] min-w-[1062px] bg-white flex flex-row items-center justify-around px-4 '>
                <div>
                  <h3 className='text-lg leading-7 font-medium text-[#44536F]'>
                    {row.profile.fname + row.profile.lname}
                  </h3>
                  <p className='text-sm leading-[14px] font-medium text-[#44536F]'>
                    {row.profile.email}
                  </p>
                </div>

                <div>
                  <h3 className='text-lg leading-7 font-medium text-[#44536F]'>
                    {row.address.wilaya}
                  </h3>
                  <p className='text-sm leading-[14px] font-medium text-[#44536F]'>
                    {row.address.address}
                  </p>
                </div>

                <div>
                  <p className='text-sm leading-[20.1px] font-normal text-[#44536F]'>
                    {row.profile.phoneNumber01}
                  </p>

                  <p className='text-sm leading-[20.1px] font-normal text-[#44536F]'>
                    {row.profile.phoneNumber02}
                  </p>
                </div>

                <div>
                  <p className='text-[13.4px] leading-[20.1px] font-normal text-[#44536F]'>
                    {row.store.startDate}
                  </p>
                </div>

                <div>
                  <h3 className='text-base leading-6 font-bold text-[#44536F]'>
                    {row.store.storeName}
                  </h3>
                  <p className='text-base leading-6 font-medium text-[#44536F]'>
                    {row.store.storeId}
                  </p>
                </div>

                <div>
                  <h3 className='text-base font-normal text-[#44FF83]'>
                    {row.accountStatus}
                  </h3>
                </div>
                <div className='border-[0.3px] h-[38px] w-[124px] p-3 flex flex-row items-center justify-between rounded-md cursor-pointer'>
                  <h3 className='text-[9.36px] leading-[11.33px] font-normal text-[#44536F]'>
                    {row.store.specialty}
                  </h3>

                  <Image
                    src='/small_down_arrow_icon_dark.svg'
                    width={9.36}
                    height={5.46}
                    alt='icon'
                  />
                </div>

                {(!showItem || showItem.id !== row.id) && (
                  <div className='absolute left-full ms-2'>
                    <IconButton
                      className='size-[50px] hover:bg-[#EDEBEBCC]'
                      onClick={() => onShowItem(row)}
                    >
                      <Image
                        src='/right_arrow_icon.svg'
                        width={25}
                        height={25}
                        alt='icon'
                      />
                    </IconButton>
                  </div>
                )}
              </div>

              {showItem && showItem.id === row.id && (
                <>
                  <IconButton
                    className='size-[50px] bg-[#EDEBEBCC]'
                    onClick={() => onShowItem(row)}
                  >
                    <Image
                      src='/left_arrow_icon.svg'
                      width={25}
                      height={25}
                      alt='icon'
                    />
                  </IconButton>

                  <IconButton
                    className={`size-[50px] hover:bg-[#EDEBEBCC] ${
                      showEditProfile && 'bg-[#EDEBEBCC]'
                    }`}
                    onClick={() => {
                      onShowEditProfile();
                    }}
                  >
                    <Image
                      src='/pencil_edit_icon.svg'
                      width={25}
                      height={25}
                      alt='icon'
                    />
                  </IconButton>

                  <IconButton
                    className={`size-[50px] hover:bg-[#EDEBEBCC] ${
                      showDetails && 'bg-[#EDEBEBCC]'
                    }`}
                    onClick={() => {
                      onShowDetails();
                    }}
                  >
                    <Image
                      src='/view_icon.svg'
                      width={25}
                      height={25}
                      alt='icon'
                    />
                  </IconButton>

                  <IconButton
                    className='size-[50px] hover:bg-[#EDEBEBCC]'
                    onClick={() => {
                      onOpenModal();
                    }}
                  >
                    <Image
                      src='/delete_icon.svg'
                      width={25}
                      height={25}
                      alt='icon'
                    />
                  </IconButton>
                </>
              )}
            </div>

            {showDetails && showItem && showItem.id === row.id && (
              <div className='w-[1062px] flex flex-row items-center space-x-3 mt-4 h-[319px]'>
                <div className='flex-1 bg-white p-[10px] h-full flex'>
                  <Chart />
                </div>

                <div className='w-[210px] h-full space-x-3 py-[10px] px-6 bg-white space-y-4 flex flex-col justify-between'>
                  <div className='flex flex-col items-center'>
                    <h3 className='font-semibold text-base leading-6 text-[#1A1C21]'>
                      Due date
                    </h3>
                    <p className='font-normal text-sm leading-6 text-[#5E6470]'>
                      Nov 17 - Nov 26
                    </p>
                  </div>

                  <div className='flex-1 flex flex-col justify-around'>
                    <div>
                      <h3 className='font-semibold text-base leading-6 text-[#1A1C21]'>
                        number of sales
                      </h3>
                      <p className='font-normal text-sm leading-6 text-[#5E6470]'>
                        1234556
                      </p>
                    </div>

                    <div>
                      <h3 className='font-semibold text-base leading-6 text-[#1A1C21]'>
                        Reference
                      </h3>
                      <p className='font-normal text-sm leading-6 text-[#5E6470]'>
                        INV-057
                      </p>
                    </div>

                    <div>
                      <h3 className='font-semibold text-base leading-6 text-[#1A1C21]'>
                        dz shop #
                      </h3>
                      <p className='font-normal text-sm leading-6 text-[#5E6470]'>
                        EFK43210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showEditProfile && showItem && showItem.id === row.id && (
              <EditProfileForm user={showItem} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
