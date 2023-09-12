import Select from '@components/Select';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

describe('SelectMenu', () => {
  describe('When item is clicked', () => {
    beforeEach(() => {
      document.body.innerHTML = '';

      const options = [
        { value: 'Option 0' },
        { value: 'Option 1' },
        { value: 'Option 2' },
      ];
      render(<Select options={options} />);
    });

    it('should change the input value', () => {
      const items = screen.getAllByTestId('select__menu--item');
      const input: HTMLInputElement = screen.getByTestId('select__menu--input');

      items.map((item) => {
        act(() => item.click());
        expect(input.value).toEqual(item.getAttribute('data-rsm-value'));
      });
    });

    it('should close the menu', () => {
      const items = screen.getAllByTestId('select__menu--item');
      const selectMenu = screen.getByTestId('select__menu');

      items.map((item) => {
        act(() => item.click());
        expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
      });
    });
  });
});
