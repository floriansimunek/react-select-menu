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
      render(<Select id="id" options={options} />);
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
      render(<Select id="id" options={options} isDisabled />);
      const input = screen.getByTestId('select__menu--input');
      expect(input).toBeDisabled();
    });
  });

  describe('When SelectMenu has placeholder prop', () => {
    it('should add placeholder to the input', () => {
      render(<Select id="id" options={options} placeholder="Test" />);
      const input = screen.getByTestId('select__menu--input');
      expect(input.getAttribute('placeholder')).toEqual('Test');
    });
  });

  describe('When SelectMenu has defaultValue prop', () => {
    it('should be the input value', () => {
      render(<Select id="id" options={options} defaultValue="Option 0" />);
      const input: HTMLInputElement = screen.getByTestId('select__menu--input');
      const items = screen.getAllByTestId('select__menu--item');

      expect(input.value).toEqual('Option 0');
      items.map((item) => {
        act(() => item.click());
        expect(input.value).toEqual(item.getAttribute('data-rsm-value'));
      });
    });
  });
});
