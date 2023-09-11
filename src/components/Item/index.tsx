import { ItemProps } from '@types';
import './index.scss';

const Item: React.FC<ItemProps> = ({ children, onClick, value }) => {
  return (
    <li
      className="select__menu--item"
      data-testid="select__menu--item"
      onClick={onClick}
      data-value={value}
    >
      {children}
    </li>
  );
};

export default Item;
