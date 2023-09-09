import { ListProps } from '@types';

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
};

export default List;
