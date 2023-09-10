import Input from '@components/Input';
import Item from '@components/Item';
import Label from '@components/Label';
import Menu from '@components/Menu';
import { Option, SelectProps } from '@types';
import { useEffect, useState } from 'react';
import './index.scss';

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');
  const [filtered, setFiltered] = useState<Option[]>(options);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target?.value;
    setSelected(inputValue);
    setIsOpen(true);
    setFiltered(
      options.filter((option) =>
        option.value.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    );
    onChange && onChange();
  };

  return (
    <div className={`select__menu`} data-rsm-is-open={isOpen}>
      <Label>Label</Label>
      <Input
        value={selected}
        placeholder="placeholder"
        onClick={() => setIsOpen(!isOpen)}
        onChange={(e) => handleInputChange(e)}
      />
      <Menu isEmpty={filtered.length === 0}>
        {filtered.map((option) => (
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
