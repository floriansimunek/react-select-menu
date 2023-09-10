import { InputProps } from '@types';
import './index.scss';

const Input: React.FC<InputProps> = ({ placeholder, onClick }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="select__menu--input"
      onClick={onClick}
    />
  );
};

export default Input;
