import { MenuProps } from '@types';
import './index.scss';

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <div className="select__menu--menu">
      <ul className="select__menu--list">{children}</ul>
    </div>
  );
};

export default Menu;