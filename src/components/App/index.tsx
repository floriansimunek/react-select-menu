import Select from '@components/Select';

function App() {
  const options = [
    { value: 'Option 0' },
    { value: 'Option 1' },
    { value: 'Option 2' },
  ];

  return <Select options={options} />;
}

export default App;
