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
      options={options}
      style={{
        select: {
          width: '500px',
        },
      }}
      placeholder="Placeholder"
      label="Label"
      isClearable
      isSearchable
      isRequired
    />
  );
}

export default App;
