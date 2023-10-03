import { LabelProps } from '@types';

/**
 * Label component
 * @param {string} children Label value
 * @param {string} htmlFor used to connect to input
 * @param style styles properties
 * @component
 * @returns {JSX.Element}
 */
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
