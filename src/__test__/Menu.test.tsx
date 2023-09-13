import Select from '@components/Select';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

describe('SelectMenu', () => {
  const options = [
    { value: 'Option 0' },
    { value: 'Option 1' },
    { value: 'Option 2' },
  ];

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('When menu is open', () => {
    it('should close the menu on outside click', () => {
      render(<Select id="id" options={options} />);
      const input = screen.getByTestId('select__menu--input');
      const selectMenu = screen.getByTestId('select__menu');

      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
      act(() => input.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('true');
      act(() => document.body.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
    });
  });

  describe('When menu has offset prop', () => {
    it('should be positionned', () => {
      render(
        <Select id="id" options={options} offset={{ top: 100, left: 50 }} />,
      );
      const menu = screen.getByTestId('select__menu--menu');
      expect(menu).toHaveStyle('--offset-top: 100px; --offset-left: 50px;');
    });
  });
});
