'use client'

import { useState } from 'react';

import { DROPDOWN_ITEMS } from '@/constants/headless-ui';


export const FirstDropdown = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);
  const handleCloseDropdown = () => setIsOpen(false);
  const handleClickItem = (index: number) => {
    setSelectedIndex(index);
    handleCloseDropdown();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        setSelectedIndex((prev) => (prev + 1) % DROPDOWN_ITEMS.length);
        break;
      case 'ArrowUp':
        setSelectedIndex((prev) => (prev - 1 + DROPDOWN_ITEMS.length) % DROPDOWN_ITEMS.length);
        break;
      case 'Enter':
        handleClickItem(selectedIndex);
        break;
    } 
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} >
      <button onClick={handleToggleDropdown}>Select</button>
      <p data-testid='selected-item'>{DROPDOWN_ITEMS[selectedIndex]?.text}</p>
      {isOpen && (
        <ul role='listbox'>
          {DROPDOWN_ITEMS.map((item, index) => (
            <li
              key={index}
              role='option'
              aria-selected={index === selectedIndex}
              onClick={() => handleClickItem(index)}
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
