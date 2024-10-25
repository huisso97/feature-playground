import { useState } from 'react';

interface Item {
  icon: string;
  text: string;
  description: string;
}

type DropdownProps = {
  items: Item[];
};

export const DividedDropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className='dropdown'>
      <Trigger
        label={selectedItem ? selectedItem.text : 'Select an item...'}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DropdownMenu
          items={items}
          onItemClick={item => setSelectedItem(item)}
        />
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
  onItemClick,
}: {
  items: Item[];
  onItemClick: (item: Item) => void;
}) => {
  return (
    <div className='dropdown-menu'>
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
