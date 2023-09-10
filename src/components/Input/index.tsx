import { InputProps } from '@types';
import './index.scss';

const Input: React.FC<InputProps> = ({ placeholder }) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const selectMenu = input.closest('.select__menu');
    selectMenu?.classList.toggle('open');
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="select__menu--input"
      onClick={(e) => handleClick(e)}
    />
  );
};

export default Input;
