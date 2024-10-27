import { DROPDOWN_ITEMS } from "@/constants/headless-ui";

import { FirstDropdown } from "./_components/1-first-dropdown";
import { DividedDropdown } from "./_components/2-divided-dropdown";
import { KeyboardDropdown } from "./_components/3-keyboard-dropdown";

const Dropdown = () => {
  return  <div className='mx-auto flex h-[500px] w-[700px] gap-20'>
      <div className='h-[100px] w-full'>
        <FirstDropdown />
      </div>
      <div className='h-[100px] w-full'>
        <DividedDropdown items={DROPDOWN_ITEMS} />
      </div>
      <div className='h-[100px] w-full'>
        <KeyboardDropdown items={DROPDOWN_ITEMS} />
      </div>
    </div>;
};

export default Dropdown;
