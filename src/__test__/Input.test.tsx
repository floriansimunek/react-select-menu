import Select from '@components/Select';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';

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

  describe('When input change', () => {
    it('should be the input value', () => {
      render(<Select id="id" options={options} />);
      const input: HTMLInputElement = screen.getByTestId('select__menu--input');

      fireEvent.change(input, { target: { value: 'Option 10' } });
      expect(input.value).toEqual('Option 10');
    });

    it('should filter options', () => {
      const options = [
        { value: 'aOption 0' },
        { value: 'aOption 1' },
        { value: 'Option 2' },
      ];
      render(<Select id="id" options={options} />);
      const input: HTMLInputElement = screen.getByTestId('select__menu--input');

      fireEvent.change(input, { target: { value: 'Option 1' } });

      const filteredOption = screen.getByText('aOption 1');
      const option2 = screen.queryByText('Option 2');
      const option3 = screen.queryByText('Option 3');

      expect(filteredOption).toBeInTheDocument();
      expect(option2).toBeNull();
      expect(option3).toBeNull();

      fireEvent.change(input, { target: { value: 'aOption' } });

      const filteredOptions = screen.getAllByText((content) => {
        return content.includes('aOption');
      });
      expect(filteredOptions).toHaveLength(2);
    });

    it('should trigger onChange callback', () => {
      const handleOnChange = jest.fn();
      render(<Select id="id" options={options} onChange={handleOnChange} />);
      const input: HTMLInputElement = screen.getByTestId('select__menu--input');

      for (let i = 0; i < 10; i++) {
        fireEvent.change(input, { target: { value: i } });
      }

      expect(handleOnChange).toBeCalledTimes(10);
    });
  });
});
