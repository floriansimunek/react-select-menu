export type ItemProps = {
  children: ReactNode;
  value: string | number;
};

export type MenuProps = {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
};

export type InputProps = {
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export type LabelProps = {
  children: string;
};

export type SelectProps = {
  options: Option[];
};

export type Option = {
  value: string;
};
