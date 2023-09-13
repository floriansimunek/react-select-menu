import Select from '@components/Select';

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
    {
      label: 'Group 2',
      options: [
        { value: 'Option 6' },
        { value: 'Option 7' },
        { value: 'Option 8' },
        { value: 'Option 9' },
        { value: 'Option 10' },
      ],
    },
  ];

  return <Select options={options} placeholder="Placeholder" />;
}

export default App;
