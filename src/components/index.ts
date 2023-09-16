/* TYPES */
export type {
  CloseIconProps,
  GLabelProps,
  Group,
  InputProps,
  ItemProps,
  LabelProps,
  MenuProps,
  Option,
  SelectProps,
} from '@types';

/* COMPONENTS */
export { default as chevronIcon } from '@components/ChevronIcon';
export { default as CloseIcon } from '@components/CloseIcon';
export { default as GroupLabel } from '@components/GroupLabel';
export { default as Input } from '@components/Input';
export { default as Item } from '@components/Item';
export { default as Label } from '@components/Label';
export { default as Menu } from '@components/Menu';

import Select from '@components/Select';
export default Select;

/* STYLES */
import '@components/GroupLabel/index.scss';
import '@components/Input/index.scss';
import '@components/Item/index.scss';
import '@components/Menu/index.scss';
import '@components/Select/index.scss';
import './index.css';
