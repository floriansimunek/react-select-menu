import { InputProps } from '@types';
import './index.scss';

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onClick,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="select__menu--input"
      onClick={onClick}
      onChange={onChange}
    />
  );
};

export default Input;
