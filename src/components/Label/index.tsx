import { LabelProps } from '@types';

const Label: React.FC<LabelProps> = ({ children, htmlFor, style }) => {
  return (
    <label
      className="select__menu--label"
      data-testid="select__menu--label"
      htmlFor={htmlFor}
      style={style}
    >
      {children}
    </label>
  );
};

export default Label;
