# React Select-Menu

Simple Select-Menu working with React

## Installation

Install react-select-menu with npm

```bash
npm i @fs/react-select-menu
```

## Usage/Examples

```js
import Select from '@fs/react-select-menu';

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

## Option format

```ts
{
  value: string; // required
  isDisabled: boolean; // optional
  isVisible: boolean; // optional
}
```

## Group format

```ts
{
  label: string; // required
  options: Option[]; // optional
}
```

## Props

| Name         | Required | Default   | Type     | Example                |
| ------------ | -------- | --------- | -------- | ---------------------- |
| id           | yes      | undefined | string   | [Click](#id)           |
| options      | yes      | undefined | Array    | [Click](#options)      |
| className    | no       | ''        | string   | [Click](#classname)    |
| style        | no       | undefined | Object   | [Click](#style)        |
| defaultValue | no       | undefined | string   | [Click](#defaultvalue) |
| placeholder  | no       | undefined | string   | [Click](#placeholder)  |
| label        | no       | undefined | string   | [Click](#label)        |
| offset       | no       | undefined | Object   | [Click](#offset)       |
| isDisabled   | no       | false     | boolean  | [Click](#isDisabled)   |
| isClearable  | no       | false     | boolean  | [Click](#isClearable)  |
| isSearchable | no       | false     | boolean  | [Click](#isSearchable) |
| isForcedOpen | no       | false     | boolean  | [Click](#isForcedOpen) |
| onChange     | no       | undefined | function | [Click](#onchange)     |
| onClose      | no       | undefined | function | [Click](#onclose)      |
| onCreate     | no       | undefined | function | [Click](#oncreate)     |
| onFocus      | no       | undefined | function | [Click](#onfocus)      |
| onOpen       | no       | undefined | function | [Click](#onopen)       |
| onSelect     | no       | undefined | function | [Click](#onselect)     |

## Props Examples

### id

`id` is used to add a unique id to link label to the input

```js
<Select id="example-id" options={options} />
```

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

### className

`className` simply add classes to the component

```js
<Select id="id" options={options} className="class1 class2 class3" />
```

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

### placeholder

`placeholder` is the placeholder of the input

```js
<Select id="id" options={options} placeholder="Placeholder example" />
```

### label

`label` of the input, linked with the `id` prop

```js
<Select id="id" options={options} label="Label example" />
```

### offset

`offset` is the X (left) & Y (top) placement of the menu from the input

```js
const customOffset = {
    top: 50, // in px
    left: 100, // in px
}

<Select id="id" options={options} placeholder="Placeholder example" />
```

### isDisabled

`isDisabled` disable or not the input

```js
<Select id="id" options={options} isDisabled />
```

### isClearable

`isClearable` add the possibility to clear the input value (icon appear when input value isn't null)

```js
<Select id="id" options={options} isClearable />
```

### isSearchable

`isSearchable` add the possibility to search for option from input value

```js
<Select id="id" options={options} isSearchable />
```

### isForcedOpen

`isForcedOpen` tell that the menu is always open

```js
<Select id="id" options={options} isForcedOpen />
```

### onChange

`onChange` trigger when input value change

```js
<Select id="id" options={options} onChange={() => console.log('onChange')} />
```

### onClose

`onClose` trigger when menu is closed

```js
<Select id="id" options={options} onClose={() => console.log('onClose')} />
```

### onCreate

`onCreate` trigger when component is create

```js
<Select id="id" options={options} onCreate={() => console.log('onCreate')} />
```

### onFocus

`onFocus` trigger when input is focused

```js
<Select id="id" options={options} onFocus={() => console.log('onFocus')} />
```

### onOpen

`onOpen` trigger when menu is opened

```js
<Select id="id" options={options} onOpen={() => console.log('onOpen')} />
```

### onSelect

`onSelect` trigger when option is selected

```js
<Select id="id" options={options} onSelect={() => console.log('onSelect')} />
```
