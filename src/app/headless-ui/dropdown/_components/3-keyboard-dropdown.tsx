'use client'

import { useDropdown } from '@/hooks/use-dropdown';
import { DropdownItem } from '@/types/headless';

type DropdownProps = {
  items: DropdownItem[];
};

/**
 * 로직과 프레젠테이션이 명확하게 분리되어 있는 컴포넌트
 *
 * 로직: 드롭다운의 핵심 기능인 열기/닫기 상태, 선택된 항목, 강조 표시된 요소, 목록에서 선택할 때 화살표 아래로 누르는 등의 사용자 입력에 대한 반응
 *
 * 특정 시각적 표현에 얽매이지 않고 핵심 동작을 유지하므로 '헤드리스 컴포넌트'라는 용어에 맞음
 */
export const KeyboardDropdown = ({ items }: DropdownProps) => {
  const {
    isOpen,
    handleToggleDropdown,
    handleCloseDropdown,
    handleClickItem,
    selectedIndex,
    dropdownRef,
  } = useDropdown(items);

  return (
    <div ref={dropdownRef} onBlur={handleCloseDropdown}>
      <button onClick={handleToggleDropdown} className='cursor-pointer'>
        {selectedIndex >= 0 ? items[selectedIndex].text : 'Select an item'}
      </button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClickItem(index)}
              className={`item-container ${
                index === selectedIndex ? 'bg-gray-100' : ''
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/**
 * Trigger component
 * 주변 컨텍스트에 구애받지 않음
 * @param {string} label - The label of the trigger
 * @param {() => void} onClick - The click handler of the trigger
 * @returns {JSX.Element} - The trigger component
 */
const Trigger = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <div className='trigger' tabIndex={0} onClick={onClick}>
      <span className='selection'>{label}</span>
    </div>
  );
};

/**
 * DropdownMenu component
 * @param {Item[]} items - The items of the dropdown menu
 * @param {(item: Item) => void} onItemClick - The click handler of the dropdown menu
 * @returns {JSX.Element} - The dropdown menu component
 */
const DropdownMenu = ({
  items,
  selectedIndex,
  onItemClick,
}: {
  items: DropdownItem[];
  selectedIndex: number;
  onItemClick: (item: DropdownItem) => void;
}) => {
  return (
    <div className='dropdown-menu' role='listbox'>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onItemClick(item)}
          className='item-container'
        >
          <img src={item.icon} alt={item.text} width={20} height={20} />
          <div className='details'>
            <div>{item.text}</div>
            <small>{item.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};
