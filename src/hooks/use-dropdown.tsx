import { useEffect, useRef, useState } from 'react';

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
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);
  const handleCloseDropdown = () => setIsOpen(false);

  const handleKeydown = (event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case "ArrowDown":
        setSelectedIndex((prev) => (prev + 1) % items.length);
        break;
      case "ArrowUp":
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
        break;
      case "Enter":
        handleClickItem(selectedIndex);
        break;
      case 'Escape':
        handleCloseDropdown();
        break;
      default:
        break;
    }
  };

  const handleClickItem = (index: number) => {
    setSelectedIndex(index);
    handleCloseDropdown();
  };


  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleKeydown);
    else document.removeEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isOpen, selectedIndex]);


  return {
    isOpen,
    handleToggleDropdown,
    handleCloseDropdown,
    selectedIndex,
    handleClickItem,
    dropdownRef,
  };
};
