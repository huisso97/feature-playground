'use client';

import { FirstDropdown } from '@/components/headless-ui/dropdown/1-first-dropdown';
import { DividedDropdown } from '@/components/headless-ui/dropdown/2-divided-dropdown';
import { KeyboardDropdown } from '@/components/headless-ui/dropdown/3-keyboard-dropdown';
import { DROPDOWN_ITEMS } from '@/constants/headless-ui';

const HeadlessUI = () => {
  return (
    <div className='mx-auto flex h-[500px] w-full gap-20'>
      <div className='h-[200px] w-full'>
        <FirstDropdown />
      </div>
      <div className='h-[200px] w-full'>
        <DividedDropdown items={DROPDOWN_ITEMS} />
      </div>
      <div className='h-[200px] w-full'>
        <KeyboardDropdown items={DROPDOWN_ITEMS} />
      </div>
    </div>
  );
};

export default HeadlessUI;
