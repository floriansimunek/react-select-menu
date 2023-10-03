import { InputProps } from '@types';
import './index.scss';

/**
 * Input component - used for search option or get select-menu value
 * @param id Id prop - needed to connect label to the input
 * @param value value of the input
 * @param placeholder placeholder of the input
 * @param onChange onChange event handler
 * @param isDisabled disabling the input or not
 * @param isSearchable whether the input is searchable
 * @param isRequired whether the input is required
 * @component
 * @returns {JSX.Element}
 */
const Input: React.FC<InputProps> = ({
  id,
  value,
  placeholder,
  onChange,
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
      readOnly={!isSearchable}
      disabled={isDisabled}
      required={isRequired}
    />
  );
};

export default Input;
