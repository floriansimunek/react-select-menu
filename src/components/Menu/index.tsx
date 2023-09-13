import { MenuProps } from '@types';
import './index.scss';

const Menu: React.FC<MenuProps> = ({ children, offset }) => {
  return (
    <div
      className="select__menu--menu"
      data-testid="select__menu--menu"
      style={
        {
          '--offset-top': offset?.top + 'px',
          '--offset-left': offset?.left + 'px',
        } as React.CSSProperties
      }
    >
      <ul className="select__menu--list">{children}</ul>
    </div>
  );
};

export default Menu;
