import Select from '@components/Select';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

describe('SelectMenu', () => {
  const options = [
    { value: 'Option 0' },
    { value: 'Option 1', isDisabled: true },
    { value: 'Option 2' },
  ];

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('When item is clicked', () => {
    it('should change the input value', () => {
      render(<Select id="id" options={options} />);
      const items = screen.getAllByTestId('select__menu--item');
      const input: HTMLInputElement = screen.getByTestId('select__menu--input');

      items.map((item) => {
        if (!item.getAttribute('data-rsm-item-is-disabled')) {
          act(() => item.click());
          expect(input.value).toEqual(item.getAttribute('data-rsm-value'));
        }
      });
    });

    it('should close the menu', () => {
      render(<Select id="id" options={options} />);
      const items = screen.getAllByTestId('select__menu--item');
      const selectMenu = screen.getByTestId('select__menu');

      items.map((item) => {
        act(() => item.click());
        expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
      });
    });
  });

  describe('When item is disabled', () => {
    it('should have a data attribute', () => {
      render(<Select id="id" options={options} />);
      options.forEach((option) => {
        if (option.isDisabled) {
          const disabledItem = screen.getByText(option.value);
          expect(disabledItem).toHaveAttribute(
            'data-rsm-item-is-disabled',
            'true',
          );
        }
      });
    });
  });
});
