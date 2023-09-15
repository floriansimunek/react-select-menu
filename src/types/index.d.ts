export type ItemProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  option: Option;
  style?: CSSProperties;
};

export type MenuProps = {
  children: React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
  offset?: { top?: number; left?: number };
  menuStyle?: CSSProperties;
  listStyle?: CSSProperties;
};

export type InputProps = {
  id: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
  style?: CSSProperties;
  isDisabled?: boolean;
  isSearchable?: boolean;
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
  className?: string;
  style?: {
    select?: CSSProperties;
    input?: CSSProperties;
    menu?: CSSProperties;
    list?: CSSProperties;
    item?: CSSProperties;
  };
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  offset?: { top?: number; left?: number };
  isDisabled?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  onChange?: () => void;
  onClose?: () => void;
  onCreate?: () => void;
  onFocus?: () => void;
  onOpen?: () => void;
};

export type CloseIconProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export type Option = {
  value: string;
  isDisabled?: boolean;
  isVisible?: boolean;
};

export type Group = {
  label: string;
  options?: Option[];
};
