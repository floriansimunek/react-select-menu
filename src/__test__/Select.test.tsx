import Select from '@components/Select';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('SelectMenu', () => {
  describe('When component called', () => {
    beforeEach(() => {
      document.body.innerHTML = '';

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
      render(<Select options={options} label="Label" />);
    });

    it('should render menu', () => {
      const selectMenu = screen.getByTestId('select__menu');
      expect(selectMenu).toBeInTheDocument();
    });

    it('should render label', () => {
      const label = screen.getByTestId('select__menu--label');
      expect(label).toBeInTheDocument();
      expect(label.textContent).toBe('Label');
    });

    it('should render input', () => {
      const input = screen.getByTestId('select__menu--input');
      expect(input).toBeInTheDocument();
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
});
