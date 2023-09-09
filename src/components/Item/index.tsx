import { ItemProps } from '@types';

const Item: React.FC<ItemProps> = ({ children, value }) => {
  return <li data-value={value}>{children}</li>;
};

export default Item;
