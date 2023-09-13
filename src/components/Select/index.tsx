import GroupLabel from '@components/GroupLabel';
import Input from '@components/Input';
import Item from '@components/Item';
import Label from '@components/Label';
import Menu from '@components/Menu';
import { Group, Option, SelectProps } from '@types';
import { useEffect, useState } from 'react';
import './index.scss';

const Select: React.FC<SelectProps> = ({
  id,
  options,
  placeholder,
  label,
  isDisabled,
}) => {
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

  const renderList = (options: (Option | Group)[]) => {
    return options.map((option) => {
      if ('options' in option) {
        return (
          <ul key={option.label}>
            <GroupLabel option={option} />
            {renderList(option.options as Option[])}
          </ul>
        );
      } else {
        return renderItem(option as Option);
      }
    });
  };

  const renderItem = (option: Option) => {
    return (
      <Item
        key={option.value}
        value={option.value}
        onClick={() => {
          setSelected(option.value);
          setIsOpen(false);
        }}
      >
        {option.value}
      </Item>
    );
  };

  return (
    <div
      className={`select__menu`}
      data-rsm-is-open={isOpen}
      data-testid="select__menu"
    >
      {label && <Label htmlFor={'rsm-' + id}>{label}</Label>}
      <Input
        id={'rsm-' + id}
        value={selected}
        placeholder={placeholder}
        onClick={() => setIsOpen(!isOpen)}
        isDisabled={isDisabled}
      />
      <Menu>{renderList(options)}</Menu>
    </div>
  );
};

export default Select;
