export type ItemProps = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  value: string | number;
};

export type MenuProps = {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
  offset?: { top?: number; left?: number };
};

export type InputProps = {
  id: string;
  value?: string;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};

export type LabelProps = {
  children: string;
  htmlFor: string;
};

export type GLabelProps = {
  option: Group;
};

export type SelectProps = {
  id: string;
  options: (Option | Group)[];
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  offset?: { top?: number; left?: number };
  isDisabled?: boolean;
};

export type Option = {
  value: string;
};

export type Group = {
  label: string;
  options?: Option[];
};
