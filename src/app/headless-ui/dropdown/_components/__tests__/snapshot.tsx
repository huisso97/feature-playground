import { render } from '@testing-library/react';

import { DROPDOWN_ITEMS } from '@/constants/headless-ui';

import { KeyboardDropdown } from '../3-keyboard-dropdown';

it('renders homepage unchanged', () => {
  const { container } = render(<KeyboardDropdown items={DROPDOWN_ITEMS} />);
  expect(container).toMatchSnapshot();
});
