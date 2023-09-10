import { ItemProps } from '@types';
import './index.scss';

const Item: React.FC<ItemProps> = ({ children, value }) => {
  return (
    <li className="select__menu--item" data-value={value}>
      {children}
    </li>
  );
};

export default Item;
