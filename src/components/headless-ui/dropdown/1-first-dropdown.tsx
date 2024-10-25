import { useState } from 'react';

import { DROPDOWN_ITEMS } from '@/constants/headless-ui';
import { useDropdown } from '@/hooks/use-dropdown';

interface Item {
  icon: string;
  text: string;
  description: string;
}

type DropdownProps = {
  items: Item[];
};

export const FirstDropdown = () => {
  const {
    isOpen,
    toggleDropdown,
    selectedIndex,
    selectedItem,
    updateSelectedItem,
    getAriaAttributes,
    handleKeyDown,
  } = useDropdown(DROPDOWN_ITEMS);

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} {...getAriaAttributes()}>
      <button onClick={toggleDropdown}>Select</button>
      <p data-testid='selected-item'>{selectedItem?.text}</p>
      {isOpen && (
        <ul role='listbox'>
          {DROPDOWN_ITEMS.map((item, index) => (
            <li
              key={index}
              role='option'
              aria-selected={index === selectedIndex}
              onClick={() => updateSelectedItem(item)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// 코드 출처: https://ykss.netlify.app/translation/headless_component_a_pattern_for_composing_react_uis/?utm_source=substack&utm_medium=email
