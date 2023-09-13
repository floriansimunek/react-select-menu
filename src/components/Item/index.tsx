import { ItemProps } from '@types';
import './index.scss';

const Item: React.FC<ItemProps> = ({ onClick, option, style }) => {
  return (
    <li
      className="select__menu--item"
      onClick={onClick}
      style={{ ...style }}
      data-testid="select__menu--item"
      data-rsm-value={option.value}
      data-rsm-item-is-disabled={option.isDisabled}
    >
      {option.value}
    </li>
  );
};

export default Item;
