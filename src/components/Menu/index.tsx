import { MenuProps } from '@types';
import './index.scss';

const Menu: React.FC<MenuProps> = ({ children, isEmpty }) => {
  return (
    <div className="select__menu--menu">
      <ul className="select__menu--list">
        {isEmpty ? <li>No options found</li> : children}
      </ul>
    </div>
  );
};

export default Menu;
