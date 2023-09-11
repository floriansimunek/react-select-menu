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
      ];
      render(<Select options={options} />);
    });

    it('should render menu', () => {
      const selectMenu = screen.getByTestId('select__menu');
      expect(selectMenu).toBeInTheDocument();
    });

    it('should render label', () => {
      const label = screen.getByTestId('select__menu--label');
      expect(label).toBeInTheDocument();
    });

    it('should render input', () => {
      const input = screen.getByTestId('select__menu--input');
      expect(input).toBeInTheDocument();
    });
  });
});
