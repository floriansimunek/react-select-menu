import Label from '@components/Label';
import Input from '@components/Input';
import Menu from '@components/Menu';
import Item from '@components/Item';
import { SelectProps } from '@types';
import './index.scss';

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <div className="select__menu">
      <Label>Label</Label>
      <Input placeholder="placeholder" />
      <Menu>
        {options.map((option) => (
          <Item key={option.value} value={option.value}>
            {option.value}
          </Item>
        ))}
      </Menu>
    </div>
  );
};

export default Select;
