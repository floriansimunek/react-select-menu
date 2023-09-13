import Select from '@components/Select';

function App() {
  const options = [
    { value: 'Option 0' },
    { value: 'Option 1', isDisabled: true },
    { value: 'Option 2' },
    {
      label: 'Group 1',
      options: [
        { value: 'Option 3', isDisabled: true },
        { value: 'Option 4' },
        { value: 'Option 5' },
      ],
    },
    {
      label: 'Group 2',
      options: [
        { value: 'Option 6' },
        { value: 'Option 7' },
        { value: 'Option 8' },
        { value: 'Option 9', isDisabled: true },
        { value: 'Option 10' },
      ],
    },
  ];

  return (
    <Select
      id="id"
      className="class1 class2 class3"
      defaultValue={options?.[3]?.options?.[0]?.value}
      options={options}
      placeholder="Placeholder"
      label="Label"
      offset={{ top: 100, left: 50 }}
    />
  );
}

export default App;
