export type ItemProps = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  value: string | number;
};

export type MenuProps = {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
  isEmpty?: boolean;
};

export type InputProps = {
  value?: string;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type LabelProps = {
  children: string;
};

export type SelectProps = {
  options: Option[];
  onChange?: ChangeEvent;
};

export type Option = {
  value: string;
};
