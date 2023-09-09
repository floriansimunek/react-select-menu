import { LabelProps } from '@types';

const Label: React.FC<LabelProps> = ({ children }) => {
  return <label htmlFor="">{children}</label>;
};

export default Label;
