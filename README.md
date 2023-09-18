# React Select-Menu

Simple Select-Menu working with React

- [Installation](#installation)
- [Usage/Examples](#usageexamples)
- Data Formats
  - [Option Format](#optionformat)
  - [Group Format](#groupformat)
- [Props](#props)
  - [Examples](#propsexamples)

## Installation

Install react-select-menu with npm

```bash
npm i @fsmnk/react-select-menu
```

[Back to top](#reactselectmenu)

## Usage/Examples

```js
import Select from '@fsmnk/react-select-menu';

function App() {
  const options = [
    { value: 'Option 0' },
    { value: 'Option 1' },
    { value: 'Option 2' },
    {
      label: 'Group 1',
      options: [
        { value: 'Option 3' },
        { value: 'Option 4' },
        { value: 'Option 5' },
      ],
    },
  ];

  return (
    <div className="App">
      <Select id="id" options={options} />
    </div>
  );
}
```

[Back to top](#reactselectmenu)

## Option format

```ts
{
  value: string; // required
  isDisabled: boolean; // optional
  isVisible: boolean; // optional
}
```

[Back to top](#reactselectmenu)

## Group format

```ts
{
  label: string; // required
  options: Option[]; // optional
}
```

[Back to top](#reactselectmenu)

## Props

| Name          | Required | Default   | Type     | Example                 |
| ------------- | -------- | --------- | -------- | ----------------------- |
| id            | yes      | undefined | string   | [Click](#id)            |
| options       | yes      | undefined | Array    | [Click](#options)       |
| className     | no       | ''        | string   | [Click](#classname)     |
| style         | no       | undefined | Object   | [Click](#style)         |
| defaultValue  | no       | undefined | string   | [Click](#defaultvalue)  |
| placeholder   | no       | undefined | string   | [Click](#placeholder)   |
| label         | no       | undefined | string   | [Click](#label)         |
| offset        | no       | undefined | Object   | [Click](#offset)        |
| isDisabled    | no       | false     | boolean  | [Click](#isDisabled)    |
| isClearable   | no       | false     | boolean  | [Click](#isClearable)   |
| isSearchable  | no       | false     | boolean  | [Click](#isSearchable)  |
| isForcedOpen  | no       | false     | boolean  | [Click](#isForcedOpen)  |
| isRequired    | no       | false     | boolean  | [Click](#isRequired)    |
| closeOnSelect | no       | true      | boolean  | [Click](#closeOnSelect) |
| onChange      | no       | undefined | function | [Click](#onchange)      |
| onClose       | no       | undefined | function | [Click](#onclose)       |
| onCreate      | no       | undefined | function | [Click](#oncreate)      |
| onFocus       | no       | undefined | function | [Click](#onfocus)       |
| onOpen        | no       | undefined | function | [Click](#onopen)        |
| onSelect      | no       | undefined | function | [Click](#onselect)      |

[Back to top](#reactselectmenu)

## Props Examples

### id

`id` is used to add a unique id to link label to the input

```js
<Select id="example-id" options={options} />
```

[Back to top](#reactselectmenu)

### options

`options` is an Array of Object, used to generate the list in the Select-Menu

```js
const options = [
  { value: 'Option 0' },
  { value: 'Option 1' },
  { value: 'Option 2' },
];

<Select id="id" options={options} />;
```

[Back to top](#reactselectmenu)

### className

`className` simply add classes to the component

```js
<Select id="id" options={options} className="class1 class2 class3" />
```

[Back to top](#reactselectmenu)

### style

`style` is used to add custom style to components

```js
const customStyle = {
  select: {
    backgroundColor: 'red',
  }, // optional
  input: {
    padding: '1rem',
  }, // optional
  menu: {
    color: 'blue',
  }, // optional
  list: {
    backgroundColor: 'green',
  }, // optional
  item: {
    color: 'purple',
  }, // optional
};

<Select id="id" options={options} style={customStyle} />;
```

[Back to top](#reactselectmenu)

### defaultValue

`defaultValue` is the default value of the input (when component created)

```js
const options = [
  { value: 'Option 0' },
  { value: 'Option 1' },
  { value: 'Option 2' },
];

<Select id="id" options={options} defaultValue={options[0].value} />;
```

[Back to top](#reactselectmenu)

### placeholder

`placeholder` is the placeholder of the input

```js
<Select id="id" options={options} placeholder="Placeholder example" />
```

[Back to top](#reactselectmenu)

### label

`label` of the input, linked with the `id` prop

```js
<Select id="id" options={options} label="Label example" />
```

[Back to top](#reactselectmenu)

### offset

`offset` is the X (left) & Y (top) placement of the menu from the input

```js
const customOffset = {
    top: 50, // in px
    left: 100, // in px
}

<Select id="id" options={options} placeholder="Placeholder example" />
```

[Back to top](#reactselectmenu)

### isDisabled

`isDisabled` disable or not the input

```js
<Select id="id" options={options} isDisabled />
```

[Back to top](#reactselectmenu)

### isClearable

`isClearable` add the possibility to clear the input value (icon appear when input value isn't null)

```js
<Select id="id" options={options} isClearable />
```

[Back to top](#reactselectmenu)

### isSearchable

`isSearchable` add the possibility to search for option from input value

```js
<Select id="id" options={options} isSearchable />
```

[Back to top](#reactselectmenu)

### isForcedOpen

`isForcedOpen` tell that the menu is always open

```js
<Select id="id" options={options} isForcedOpen />
```

[Back to top](#reactselectmenu)

### isRequired

`isRequired` tell that the input value is required

```js
<Select id="id" options={options} isRequired />
```

[Back to top](#reactselectmenu)

### closeOnSelect

`closeOnSelect` tell that the menu is closed or not when an item is selected

```js
<Select id="id" options={options} closeOnSelect={false} />
```

[Back to top](#reactselectmenu)

### onChange

`onChange` trigger when input value change

```js
<Select id="id" options={options} onChange={() => console.log('onChange')} />
```

[Back to top](#reactselectmenu)

### onClose

`onClose` trigger when menu is closed

```js
<Select id="id" options={options} onClose={() => console.log('onClose')} />
```

[Back to top](#reactselectmenu)

### onCreate

`onCreate` trigger when component is create

```js
<Select id="id" options={options} onCreate={() => console.log('onCreate')} />
```

[Back to top](#reactselectmenu)

### onFocus

`onFocus` trigger when input is focused

```js
<Select id="id" options={options} onFocus={() => console.log('onFocus')} />
```

[Back to top](#reactselectmenu)

### onOpen

`onOpen` trigger when menu is opened

```js
<Select id="id" options={options} onOpen={() => console.log('onOpen')} />
```

[Back to top](#reactselectmenu)

### onSelect

`onSelect` trigger when option is selected

```js
<Select id="id" options={options} onSelect={() => console.log('onSelect')} />
```

[Back to top](#reactselectmenu)
