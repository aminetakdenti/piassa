"use client";

import { User } from '@/lib/types';
import Form from 'next/form';
import { Input, Label, Switch } from './ui';
import { useState } from 'react';

type Props = {
  user: User;
};

export default function EditProfileForm({ user }: Props) {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleIsOn = () => {
    setIsOn(!isOn);
  };

  return (
    <Form action={''} className='w-[1062px] bg-white mt-4 py-10'>
      <div className='pt-5 space-y-6'>
        <div className='w-[793px] mx-auto flex flex-row space-x-6'>
          <div className='flex-1 flex flex-col space-y-2'>
            <h2 className='text-[23.21px] font-bold leading-[31.8px] text-[#CACED8] mb-3'>
              Edit Profile
            </h2>
            <div className='flex flex-row space-x-6'>
              <div>
                <Label htmlFor='fname'>First Name</Label>
                <Input
                  placeholder='First Name'
                  type='text'
                  id='fname'
                  name='fname'
                  className='h-[45px] w-full border border-[#CACED8] rounded-lg px-3 focus:border-secondary outline-none'
                  value={user.profile.fname}
                />
              </div>
              <div>
                <Label htmlFor='lname'>Last Name</Label>
                <Input
                  type='text'
                  id='lname'
                  name='lname'
                  value={user.profile.lname}
                />
              </div>
            </div>

            <Label htmlFor='storeName'>Store name</Label>
            <Input
              type='text'
              id='store'
              name='store'
              value={user.store.storeName}
            />

            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              name='email'
              value={user.profile.email}
            />

            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              name='password'
              value={user.profile.password}
            />

            <div>
              <Label htmlFor='phoneNumber01'>Phone number 01</Label>
              <div className='flex space-x-2'>
                <select className='bg-white border border-[#CACED8] rounded-lg px-3 shadow-lg'>
                  <option value='+213'>+213</option>
                </select>
                <Input
                  type='tel'
                  id='phoneNumber01'
                  name='phoneNumber01'
                  value={user.profile.phoneNumber01}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='phoneNumber02'>Phone number 02</Label>
              <div className='flex space-x-2'>
                <select className='bg-white border border-[#CACED8] rounded-lg px-3 shadow-lg'>
                  <option value='+213'>+213</option>
                </select>
                <Input
                  type='tel'
                  id='phoneNumber02'
                  name='phoneNumber02'
                  value={user.profile.phoneNumber02}
                />
              </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col space-y-2'>
            <h2 className='text-[15.54px] font-bold leading-[21.1px] text-[#CACED8] mb-3 text-right'>
              {user.lastUpdate}
            </h2>

            <Label htmlFor='wilaya'>Wilaya</Label>
            <Input
              type='text'
              id='wilaya'
              name='wilaya'
              value={user.address.wilaya}
            />

            <Label htmlFor='commune'>Commune</Label>
            <Input
              type='text'
              id='commune'
              name='commune'
              value={user.address.commune}
            />

            <Label htmlFor='address'>Address</Label>
            <Input
              type='text'
              id='address'
              name='address'
              value={user.address.address}
            />

            <Label htmlFor='specialty'>Specialty</Label>
            <Input
              type='text'
              id='specialty'
              name='specialty'
              value={user.store.specialty}
            />

            <Label htmlFor='startDate'>Start date</Label>
            <Input
              type='date'
              id='startDate'
              name='startDate'
              value={user.store.startDate}
            />
          </div>
        </div>
        <hr className='w-[830px] mx-auto' />

        <div className='w-[793px] mx-auto'>
          <h3>Status Of This Account</h3>
          <div className='flex flex-row items-center space-x-2'>
            <Switch onClick={toggleIsOn} isOn={isOn} />
            <p className={`border-l pl-1 font-normal text-[13.74px] leading-[16.63px] transition-all duration-300 ${isOn ? "text-secondary border-secondary" : "text-[#E0E0E0] border-[#E0E0E0]"}`}>
              {isOn ? "ON" : "OFF"}
            </p>
          </div>
        </div>

        <hr className='w-[830px] mx-auto' />

        <div className='w-[644px] mx-auto flex flex-row justify-between items-center pb-2'>

          <select className='w-[210px] p-2 shadow-lg rounded-md bg-white border'>
            <option>FR | Langue</option>
          </select>

          <div className='flex flex-row space-x-2'>

            <button className='bg-[#E0E0E0] rounded-sm w-[85px] h-[30px] font-light text-[13.08px] text-[#44536F]'>
              Annuler
            </button>

            <button className='bg-[#FE4810] rounded-sm w-[85px] h-[30px] font-light text-[13.08px] text-white'>
              Enregistrer
            </button>

          </div>

        </div>

      </div>
    </Form>
  );
}
