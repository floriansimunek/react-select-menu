import Select from '@components/Select';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe('SelectMenu', () => {
  const options = [
    { value: 'Option 0' },
    { value: 'Option 1' },
    { value: 'Option 2' },
    {
      label: 'Group 1',
      options: [
        { value: 'Option 3' },
        { value: 'Option 4' },
        { value: 'Option 5' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { value: 'Option 6' },
        { value: 'Option 7' },
        { value: 'Option 8' },
        { value: 'Option 9' },
        { value: 'Option 10' },
      ],
    },
  ];

  const style = {
    select: {
      color: 'red',
    },
    input: {
      color: 'blue',
    },
    menu: {
      backgroundColor: 'green',
    },
    list: {
      backgroundColor: 'yellow',
    },
    item: {
      fontSize: '2rem',
    },
  };

  describe('When component called', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      render(
        <Select
          id="id"
          options={options}
          label="Label"
          className="test-class"
        />,
      );
    });

    it('should render menu', () => {
      const selectMenu = screen.getByTestId('select__menu');
      expect(selectMenu).toBeInTheDocument();
      expect(selectMenu).toHaveClass('test-class');
    });

    it('should render label', () => {
      const label = screen.getByTestId('select__menu--label');
      expect(label).toBeInTheDocument();
      expect(label.textContent).toBe('Label');
      expect(label.getAttribute('for')).toBe('rsm-id');
    });

    it('should render input', () => {
      const input = screen.getByTestId('select__menu--input');
      expect(input).toBeInTheDocument();
      expect(input.id).toBe('rsm-id');
    });

    it('should render menu', () => {
      const menu = screen.getByTestId('select__menu--menu');
      expect(menu).toBeInTheDocument();
    });

    it('should render item', () => {
      const items = screen.getAllByTestId('select__menu--item');
      expect(items.length).toBe(11);

      items.map((item) => {
        expect(item).toBeInTheDocument();
      });

      const groupLabels = screen.getAllByTestId('select__menu--group-label');
      expect(groupLabels.length).toBe(2);
    });
  });

  describe('When component called with style prop', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      render(<Select id="id" options={options} style={{ ...style }} />);
    });

    it('it should add style to SelectMenu', () => {
      const selectMenu = screen.getByTestId('select__menu');
      expect(selectMenu).toHaveStyle('color: red');
    });

    it('it should add style to input', () => {
      const input = screen.getByTestId('select__menu--input');
      expect(input).toHaveStyle('color: blue');
    });

    it('it should add style to menu', () => {
      const menu = screen.getByTestId('select__menu--menu');
      expect(menu).toHaveStyle('background-color: green');
    });

    it('it should add style to list', () => {
      const list = screen.getByTestId('select__menu--list');
      expect(list).toHaveStyle('background-color: yellow');
    });

    it('it should add style to item', () => {
      const items = screen.getAllByTestId('select__menu--item');

      items.map((item) => {
        expect(item).toHaveStyle('font-size: 2rem');
      });
    });
  });

  describe('When clicking the container', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      render(<Select id="id" options={options} />);
    });

    it('should be focused', () => {
      const container = screen.getByTestId('select__menu--container');
      expect(container).toHaveAttribute('data-rsm-is-focused');
      act(() => container.click());
      expect(container.getAttribute('data-rsm-is-focused')).toBe('true');
      act(() => document.body.click());
      expect(container.getAttribute('data-rsm-is-focused')).toBe('false');
    });
  });

  describe('When SelectMenu is called with callbacks', () => {
    it('should trigger onChange callback', () => {
      const fn = jest.fn();
      render(<Select id="id" options={options} onChange={fn} />);
      const input: HTMLInputElement = screen.getByTestId('select__menu--input');

      for (let i = 0; i < 10; i++) {
        fireEvent.change(input, { target: { value: i } });
      }

      expect(fn).toBeCalledTimes(10);
    });

    it('should trigger onClose callback', () => {
      const fn = jest.fn();
      render(<Select id="id" options={options} onClose={fn} />);
      const container = screen.getByTestId('select__menu--container');

      expect(fn).toBeCalledTimes(0);
      act(() => container.click());
      expect(fn).toBeCalledTimes(0);
      act(() => container.click());
      expect(fn).toBeCalledTimes(1);
    });

    it('should trigger onCreate callback', () => {
      const fn = jest.fn();
      render(<Select id="id" options={options} onCreate={fn} />);
      expect(fn).toBeCalledTimes(1);
    });
  });
});
