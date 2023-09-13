import { GLabelProps } from '@types';
import './index.scss';

const GroupLabel: React.FC<GLabelProps> = ({ option }) => {
  return (
    <li className="select__menu--group-label">
      <span>{option.label}</span>
      <span>{option.options?.length}</span>
    </li>
  );
};

export default GroupLabel;
