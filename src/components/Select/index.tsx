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
  isSearchable,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');
  const [filtered, setFiltered] = useState<(Option | Group)[]>(options);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.select__menu')) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const renderList = (options: (Option | Group)[]) => {
    return options.map((option) => {
      if (option && 'options' in option) {
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

  const filterOptions = (inputValue: string) => {
    const filtered = options
      .map((option) => {
        if ('options' in option) {
          const subOptions = option.options?.filter((subOption) =>
            subOption.value.toLowerCase().includes(inputValue.toLowerCase()),
          );
          if (subOptions?.length) {
            return {
              label: option.label,
              options: subOptions,
            };
          }
        } else if (
          (option as Option).value
            .toLowerCase()
            .includes(inputValue.toLowerCase())
        ) {
          return option;
        }
        return null;
      })
      .filter(Boolean);

    if (filtered.length === 0) {
      setFiltered([{ value: 'No options found.' }]);
    } else {
      setFiltered(filtered as (Option | Group)[]);
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
        data-rsm-is-focused={isFocused}
        data-testid="select__menu--container"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsFocused(true);
        }}
      >
        <Input
          id={'rsm-' + id}
          value={selected || defaultValue || ''}
          placeholder={placeholder}
          onChange={(e) => {
            const input = e.target as HTMLInputElement;
            setSelected(input.value);
            filterOptions(input.value);
          }}
          style={{ ...style?.input }}
          isDisabled={isDisabled}
          isSearchable={isSearchable}
        />
        <div className="select__menu--indicators">
          {isClearable && !!selected && (
            <CloseIcon
              onClick={() => {
                setSelected('');
                setFiltered(options);
                setIsOpen(false);
              }}
            />
          )}
          <div className="select__menu--indicators-separator"></div>
          <ChevronIcon />
        </div>
      </div>
      <Menu
        offset={offset}
        menuStyle={{ ...style?.menu }}
        listStyle={{ ...style?.list }}
      >
        {renderList(filtered)}
      </Menu>
    </div>
  );
};

export default Select;
