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

/**
 * Select component to create a drop-down list with options.
 * @param {string} id - The unique identifier of the component.
 * @param {Array.<Option | Group>} options - The options to display in the drop-down list.
 * @param {Object} style - Custom CSS styles for the component.
 * @param {string} className - The additional CSS classes to apply to the component.
 * @param {string} defaultValue - The default value of the drop-down list.
 * @param {string} placeholder - The text of the placeholder indicator.
 * @param {string} label - The label associated with the drop-down list.
 * @param {number} offset - The offset of the menu relative to the drop-down list.
 * @param {number} zIndex - The depth index of the component.
 * @param {boolean} isDisabled - Indicates whether the drop-down list is disabled.
 * @param {boolean} isClearable - Indicates whether the clear option is enabled.
 * @param {boolean} isSearchable - Indicates whether search options are enabled.
 * @param {boolean} isForcedOpen - Indicates whether the drop-down list should be permanently open.
 * @param {boolean} isRequired - Indicates whether selection of an option is required.
 * @param {boolean} closeOnSelect - Indicates whether the list should be closed after an option is selected.
 * @param {function} onChange - The callback function called when an option is changed.
 * @param {function} onClose - The callback function called when the list closes.
 * @param {function} onCreate - The callback function called when creating the list.
 * @param {function} onFocus - The callback function called when an element gets focus.
 * @param {function} onOpen - The callback function called when the list expands.
 * @param {function} onSelect - The callback function called when an option is selected.
 * @component
 * @returns {JSX.Element} - The Select component.
 */
const Select: React.FC<SelectProps> = ({
  id,
  options,
  style,
  className = '',
  defaultValue,
  placeholder,
  label,
  offset,
  zIndex = 1,
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

  /**
   * Function to render the list of options.
   * @param {Array.<Option | Group>} options - The options to display.
   * @returns {JSX.Element} - The rendered options list.
   */
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

  /**
   * Function to render an option element.
   * @param {Option} option - The option to display.
   * @returns {JSX.Element} - The returned option element.
   */
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

  /**
   * Function to manage the click on an option.
   * @param {Option} option - The selected option.
   */
  const handleItemClick = (option: Option) => {
    if (!option.isDisabled) {
      setSelected(option.value);
      isForcedOpen
        ? setIsOpen(isForcedOpen)
        : closeOnSelect && setIsOpen(false);
    }
  };

  /**
   * Function to filter options based on search value.
   * @param {string} inputValue - The search value.
   */
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
      style={{ ...style?.select, '--zIndex': zIndex } as React.CSSProperties}
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
