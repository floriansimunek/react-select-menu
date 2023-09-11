import { InputProps } from '@types';
import './index.scss';

const Input: React.FC<InputProps> = ({ value, placeholder, onClick }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="select__menu--input"
      data-testid="select__menu--input"
      onClick={onClick}
      readOnly
    />
  );
};

export default Input;
