import { useState } from 'react';

interface Item {
  icon: string;
  text: string;
  description: string;
}

type DropdownProps = {
  items: Item[];
};

export const FirstDropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className='dropdown'>
      <div className='trigger' tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <span className='selection'>
          {selectedItem ? selectedItem.text : 'Select an item...'}
        </span>
      </div>
      {isOpen && (
        <div className='dropdown-menu'>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
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
      )}
    </div>
  );
};
