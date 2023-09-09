import { InputProps } from '@types';

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} />;
};

export default Input;
