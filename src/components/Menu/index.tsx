import { MenuProps } from '@types';
import './index.scss';

/**
 * Menu component - render the options prop of the Select component
 * @param children Menu items or group
 * @param offset offset position of the menu
 * @param menuStyle style properties
 * @param listStyle style properties
 * @component
 * @returns {JSX.Element}
 */
const Menu: React.FC<MenuProps> = ({
  children,
  offset = { top: 0, left: 0 },
  menuStyle,
  listStyle,
}) => {
  return (
    <div
      className="select__menu--menu"
      data-testid="select__menu--menu"
      style={
        {
          ...menuStyle,
          '--offset-top': offset?.top + 'px',
          '--offset-left': offset?.left + 'px',
        } as React.CSSProperties
      }
    >
      <ul
        className="select__menu--list"
        data-testid="select__menu--list"
        style={{ ...listStyle }}
      >
        {children}
      </ul>
    </div>
  );
};

export default Menu;
