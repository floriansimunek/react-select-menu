export type ItemProps = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  value: string | number;
};

export type MenuProps = {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
};

export type InputProps = {
  value?: string;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};

export type LabelProps = {
  children: string;
};

export type SelectProps = {
  options: Option[];
  isDisabled?: boolean;
};

export type Option = {
  value: string;
};
