'use client';

import { FirstDropdown } from '@/components/headless-ui/1-first-dropdown';
import { DividedDropdown } from '@/components/headless-ui/2-divided-dropdown';
import { DROPDOWN_ITEMS } from '@/constants/headless-ui';

const HeadlessUI = () => {
  return (
    <div className='mx-auto flex h-[500px] w-80 gap-20'>
      <div className='h-[200px] w-full'>
        <FirstDropdown items={DROPDOWN_ITEMS} />
      </div>
      <div className='h-[200px] w-full'>
        <DividedDropdown items={DROPDOWN_ITEMS} />
      </div>
    </div>
  );
};

export default HeadlessUI;
