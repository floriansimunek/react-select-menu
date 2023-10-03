import { GLabelProps } from '@types';
import './index.scss';

/**
 * Render of a Group in options array of the Select component
 * @param option Option object with label and sub-options
 * @components
 * @returns {JSX.Element}
 */
const GroupLabel: React.FC<GLabelProps> = ({ option }) => {
  return (
    <li
      className="select__menu--group-label"
      data-testid="select__menu--group-label"
    >
      <span>{option.label}</span>
      <span>{option.options?.length}</span>
    </li>
  );
};

export default GroupLabel;
