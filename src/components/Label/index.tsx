import { LabelProps } from '@types';

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label
      className="select__menu--label"
      data-testid="select__menu--label"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
