import { CSSProperties } from 'react';

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
  isDisabled?: boolean;
  isSearchable?: boolean;
  isRequired?: boolean;
};

export type LabelProps = {
  children: string;
  htmlFor: string;
  style?: CSSProperties;
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
    label?: CSSProperties;
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
  isForcedOpen?: boolean;
  isRequired?: boolean;
  closeOnSelect?: boolean;
  onChange?: () => void;
  onClose?: () => void;
  onCreate?: () => void;
  onFocus?: () => void;
  onOpen?: () => void;
  onSelect?: () => void;
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
