import { InputProps } from '@types';
import './index.scss';

const Input: React.FC<InputProps> = ({
  id,
  value,
  placeholder,
  style,
  isDisabled,
}) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
      className="select__menu--input"
      data-testid="select__menu--input"
      style={{ ...style }}
      readOnly
      disabled={isDisabled}
    />
  );
};

export default Input;
