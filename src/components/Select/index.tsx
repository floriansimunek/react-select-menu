import Label from '@components/Label';
import Input from '@components/Input';
import List from '@components/List';
import Item from '@components/Item';
import { SelectProps } from '@types';

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <div>
      <Label>Label</Label>
      <Input placeholder="placeholder" />
      <List>
        {options.map((option) => (
          <Item value={option.value}>{option.value}</Item>
        ))}
      </List>
    </div>
  );
};

export default Select;
