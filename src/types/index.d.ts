export type ItemProps = {
  children: ReactNode;
  value: string | number;
};

export type ListProps = {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
};

export type InputProps = {
  placeholder?: string;
};

export type LabelProps = {
  children: string;
};
