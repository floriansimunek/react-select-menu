import { InputProps } from '@types';
import './index.scss';

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onClick,
  isDisabled,
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="select__menu--input"
      data-testid="select__menu--input"
      onClick={onClick}
      readOnly
      disabled={isDisabled}
    />
  );
};

export default Input;
