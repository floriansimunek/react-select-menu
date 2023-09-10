import { InputProps } from '@types';

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
      onClick={(e) => handleClick(e)}
    />
  );
};

export default Input;
