import { CloseIconProps } from '@types';

const closeIcon: React.FC<CloseIconProps> = ({ onClick }) => {
  return (
    <div className="select__menu--icon-container" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="select__menu--icon select__menu--icon-close"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </div>
  );
};
export default closeIcon;
