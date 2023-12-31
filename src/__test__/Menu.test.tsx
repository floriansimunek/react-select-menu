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

    it('should close the menu on item click if closeOnSelect is true', () => {
      render(<Select id="id" options={options} />);
      const selectMenu = screen.getByTestId('select__menu');
      const input = screen.getByTestId('select__menu--input');
      const item = screen.getAllByTestId('select__menu--item')[0];
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
      act(() => input.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('true');
      act(() => item.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
    });

    it('should not close the menu on item click if closeOnSelect is false', () => {
      render(<Select id="id" options={options} closeOnSelect={false} />);
      const selectMenu = screen.getByTestId('select__menu');
      const input = screen.getByTestId('select__menu--input');
      const item = screen.getAllByTestId('select__menu--item')[0];
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('false');
      act(() => input.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('true');
      act(() => item.click());
      expect(selectMenu.getAttribute('data-rsm-is-open')).toEqual('true');
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

  describe('When menu has isForcedOpen prop', () => {
    it('should be always open', () => {
      render(<Select id="id" options={options} isForcedOpen />);
      const selectmenu = screen.getByTestId('select__menu');
      expect(selectmenu.getAttribute('data-rsm-is-open')).toBe('true');
      act(() => document.body.click());
      expect(selectmenu.getAttribute('data-rsm-is-open')).toBe('true');
    });
  });
});
