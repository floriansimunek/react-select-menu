export type ItemProps = {
  children: ReactNode;
  value: string | number;
};

export type MenuProps = {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
};

export type InputProps = {
  placeholder?: string;
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
