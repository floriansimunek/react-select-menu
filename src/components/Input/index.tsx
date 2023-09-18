import { InputProps } from '@types';
import './index.scss';

const Input: React.FC<InputProps> = ({
  id,
  value,
  placeholder,
  onChange,
  style,
  isDisabled,
  isSearchable,
  isRequired,
}) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="select__menu--input"
      data-testid="select__menu--input"
      style={{ ...style }}
      readOnly={!isSearchable}
      disabled={isDisabled}
      required={isRequired}
    />
  );
};

export default Input;
