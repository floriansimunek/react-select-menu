import Input from '@components/Input';
import Item from '@components/Item';
import Label from '@components/Label';
import Menu from '@components/Menu';
import { SelectProps } from '@types';
import { useEffect, useState } from 'react';
import './index.scss';

const Select: React.FC<SelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.select__menu')) {
        setIsOpen(false);
      }
    };
    isOpen && document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div
      className={`select__menu`}
      data-rsm-is-open={isOpen}
      data-testid="select__menu"
    >
      <Label>Label</Label>
      <Input
        value={selected}
        placeholder="placeholder"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Menu>
        {options.map((option) => (
          <Item
            key={option.value}
            value={option.value}
            onClick={() => setSelected(option.value)}
          >
            {option.value}
          </Item>
        ))}
      </Menu>
    </div>
  );
};

export default Select;
