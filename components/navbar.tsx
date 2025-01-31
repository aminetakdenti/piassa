'use client';

import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import DropDown from './drop-down';
import SearchInput from './search-input';
import { WILAYAS } from '@/constant';

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(DateTime.now());
  const [isDropDownOpend, setIsDropDownOpend] = useState(false);
  const [dropDownSelectedItem, setDropDownSelectedItem] = useState<
    null | string
  >(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(DateTime.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-row justify-between p-3 w-[1092px] mx-auto'>
      <div className='flex flex-row space-x-7 md:space-y-0'>
        <SearchInput />
        <DropDown
          isOpend={isDropDownOpend}
          setIsOpend={setIsDropDownOpend}
          data={WILAYAS}
          selectedItem={dropDownSelectedItem}
          setSelectedItem={setDropDownSelectedItem}
        />
      </div>

      <div className='flex space-x-7 items-center'>
        <h3 className='text-lg text-white font-semibold leading-[18px]'>
          Admin Name
        </h3>

        <div>
          <h3 className='text-lg text-white font-semibold leading-[18px] text-center'>
            {currentDateTime.toFormat('dd-MM-yyyy')}
          </h3>
          <h3 className='text-lg text-white font-semibold leading-[18px] text-center'>
            {currentDateTime.toFormat('HH:mm:ss')}
          </h3>
        </div>
      </div>
    </div>
  );
}
