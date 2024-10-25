import { useState } from 'react';

interface Item {
  icon: string;
  text: string;
  description: string;
}

/**
 * 드롭다운 컴포넌트에 대한 상태 관리 훅
 *
 * 상태 및 키보드 이벤트 처리 로직을 효율적으로 마무리하여 필수 상태와 함수로 채워진 객체를 반환
 *
 * 드롭다운이 열려있는지 여부, 선택된 항목, 강조 표시된 항목, Enter, Space, ArrowDown, ArrowUp 키 이벤트 처리 함수를 포함
 *
 * @param items - 드롭다운 메뉴 아이템 배열
 * @returns 드롭다운 상태 관리 함수들
 */
export const useDropdown = (items: Item[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // 헬퍼 함수는 UI에 대한 일부 aria 속성을 반환할 수 있습니다.
  const getAriaAttributes = () => ({
    role: 'combobox',
    'aria-expanded': isOpen,
    'aria-activedescendant': selectedItem ? selectedItem.text : undefined,
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        setIsOpen(true);
    }
  };

  const toggleDropdown = () => setIsOpen(isOpen => !isOpen);

  return {
    isOpen,
    toggleDropdown,
    handleKeyDown,
    selectedItem,
    setSelectedItem,
    selectedIndex,
  };
};
