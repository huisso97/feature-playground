import '@testing-library/jest-dom';
import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DROPDOWN_ITEMS } from '@/constants/headless-ui';
import { useDropdown } from '@/hooks/use-dropdown';

import { FirstDropdown } from '../1-first-dropdown';

describe('Dropdown', () => {
  it('드롭다운 열기/닫기 상태가 핸들링된다.', () => {
    const { result } = renderHook(() => useDropdown(DROPDOWN_ITEMS));

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.toggleDropdown();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggleDropdown();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('토글을 실행시킨다', async () => {
    render(<FirstDropdown />);

    const trigger = screen.getByRole('button');

    expect(trigger).toBeInTheDocument();

    // user event 라이브러리를 fireEvent와 달리 사람의 행동에 가까운 좀 더 추상화된 함수명 제공
    // cahnge 이벤트 뿐만 아니라 focus, keydown, keyup과 같은 실제로 동반되어야 하는 모든 이벤트
    // 함께 발생
    // 출처: https://www.daleseo.com/testing-library-user-agent/
    await userEvent.click(trigger);

    const list = screen.getByRole('listbox');
    expect(list).toBeInTheDocument();

    await userEvent.click(trigger);

    expect(list).not.toBeInTheDocument();
  });

  it('키보드 탐색을 통해 항목을 선택한다.', async () => {
    render(<FirstDropdown />);

    const trigger = screen.getByRole('button');

    expect(trigger).toBeInTheDocument();

    await userEvent.click(trigger);

    const dropdown = screen.getByRole('combobox');
    dropdown.focus();

    await userEvent.type(dropdown, '{arrowdown}');
    await userEvent.type(dropdown, '{enter}');

    console.log(screen.getByTestId('selected-item'));
    expect(screen.getByTestId('selected-item')).toHaveTextContent(
      DROPDOWN_ITEMS[0].text,
    );
  });
});
