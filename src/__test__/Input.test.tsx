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

  describe('When input is clicked', () => {
    it('should open the menu', () => {
      render(<Select options={options} />);
      const input = screen.getByTestId('select__menu--input');
      const selectMenu = screen.getByTestId('select__menu');

      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
      act(() => input.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('true');
      act(() => input.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
    });
  });

  describe('When SelectMenu has isDisabled prop', () => {
    it('should disable the input', () => {
      render(<Select options={options} isDisabled />);
      const input = screen.getByTestId('select__menu--input');
      expect(input).toBeDisabled();
    });
  });
});
