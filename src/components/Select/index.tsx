import ChevronIcon from '@components/ChevronIcon';
import CloseIcon from '@components/CloseIcon';
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
  style,
  className = '',
  defaultValue,
  placeholder,
  label,
  offset,
  isDisabled,
  isClearable,
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
        option={option}
        onClick={() => handleItemClick(option)}
        style={{ ...style?.item }}
      />
    );
  };

  const handleItemClick = (option: Option) => {
    if (!option.isDisabled) {
      setSelected(option.value);
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`select__menu ${className}`}
      data-rsm-is-open={isOpen}
      data-testid="select__menu"
      style={{ ...style?.select }}
    >
      {label && <Label htmlFor={'rsm-' + id}>{label}</Label>}
      <div
        className="select__menu--container"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Input
          id={'rsm-' + id}
          value={selected || defaultValue || ''}
          placeholder={placeholder}
          style={{ ...style?.input }}
          isDisabled={isDisabled}
        />
        <div className="select__menu--indicators">
          {isClearable && !!selected && <CloseIcon />}
          <div className="select__menu--indicators-separator"></div>
          <ChevronIcon />
        </div>
      </div>
      <Menu
        offset={offset}
        menuStyle={{ ...style?.menu }}
        listStyle={{ ...style?.list }}
      >
        {renderList(options)}
      </Menu>
    </div>
  );
};

export default Select;
