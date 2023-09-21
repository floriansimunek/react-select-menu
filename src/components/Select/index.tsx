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
import '../index.css';

const Select: React.FC<SelectProps> = ({
  id,
  options,
  style,
  className = '',
  defaultValue,
  placeholder,
  label,
  offset,
  isDisabled = false,
  isClearable = false,
  isSearchable = false,
  isForcedOpen = false,
  isRequired = false,
  closeOnSelect = true,
  onChange,
  onClose,
  onCreate,
  onFocus,
  onOpen,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');
  const [filtered, setFiltered] = useState<(Option | Group)[]>(options);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    onCreate && onCreate();
    isForcedOpen ? setIsOpen(isForcedOpen) : setIsOpen(false);

    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.select__menu')) {
        isForcedOpen ? setIsOpen(isForcedOpen) : setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onCreate, isForcedOpen]);

  useEffect(() => {
    if (isOpen === false && isClicked) {
      onClose && onClose();
    }

    if (isOpen && isClicked) {
      onOpen && onOpen();
    }
  }, [isClicked, isOpen, onClose, onOpen]);

  useEffect(() => {
    if (isFocused) {
      onFocus && onFocus();
    }
  }, [isFocused, onFocus]);

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
        onClick={() => {
          handleItemClick(option);
          onSelect && onSelect();
        }}
        style={{ ...style?.item }}
      />
    );
  };

  const handleItemClick = (option: Option) => {
    if (!option.isDisabled) {
      setSelected(option.value);
      isForcedOpen
        ? setIsOpen(isForcedOpen)
        : closeOnSelect && setIsOpen(false);
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
      {label && (
        <Label htmlFor={'rsm-' + id} style={{ ...style?.label }}>
          {label}
        </Label>
      )}
      <div
        className="select__menu--container"
        tabIndex={0}
        data-rsm-is-focused={isFocused}
        data-testid="select__menu--container"
        onClick={() => {
          isForcedOpen ? setIsOpen(isForcedOpen) : setIsOpen(!isOpen);
          setIsFocused(true);
          if (!isClicked) {
            setIsClicked(true);
          }
        }}
        onFocus={() => setIsFocused(true)}
        style={{ ...style?.input }}
      >
        <Input
          id={'rsm-' + id}
          value={selected || defaultValue || ''}
          placeholder={placeholder}
          onChange={(e) => {
            const input = e.target as HTMLInputElement;
            setSelected(input.value);
            filterOptions(input.value);
            if (!isOpen) {
              isForcedOpen ? setIsOpen(isForcedOpen) : setIsOpen(true);
            }
            onChange && onChange();
          }}
          isDisabled={isDisabled}
          isSearchable={isSearchable}
          isRequired={isRequired}
        />
        <div className="select__menu--indicators">
          {isClearable && !!selected && (
            <CloseIcon
              onClick={() => {
                setSelected('');
                setFiltered(options);
                isForcedOpen ? setIsOpen(isForcedOpen) : setIsOpen(false);
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
