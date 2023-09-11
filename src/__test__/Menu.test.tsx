import Select from '@components/Select';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

describe('SelectMenu', () => {
  describe('When menu is open', () => {
    beforeEach(() => {
      document.body.innerHTML = '';

      const options = [
        { value: 'Option 0' },
        { value: 'Option 1' },
        { value: 'Option 2' },
      ];
      render(<Select options={options} />);
    });

    it('should close the menu on outside click', () => {
      const input = screen.getByTestId('select__menu--input');
      const selectMenu = screen.getByTestId('select__menu');

      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
      act(() => input.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('true');
      act(() => document.body.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
    });
  });
});
