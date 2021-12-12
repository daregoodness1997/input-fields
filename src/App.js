import './App.css';
import Autocomplete from './components/Autocomplete';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import DateRangeInput from './components/DateRangeInput';
import DateTimeInput from './components/DateTimeInput';
import DecimalInput from './components/DecimalInput';
import EmailInput from './components/EmailInput';
import FileUpload from './components/FileUpload';
import Input from './components/Input';
import NumberInput from './components/NumberInput';
import RadioInput from './components/RadioInput';
import SelectInput from './components/SelectInput';
import Textarea from './components/Textarea';

const options = ['Lagos', 'Abuja', 'Oyo'];
const suggestions = [
  'Alligator',
  'Bask',
  'Crocodilian',
  'Death Roll',
  'Eggs',
  'Jaws',
  'Reptile',
  'Solitary',
  'Tail',
  'Wetlands',
];
const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

function App() {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
        <div className='grid grid-cols-2 xm:grid-cols-1  gap-16 max-w-7xl mx-auto px-4  sm:px-6  lg:px-8'>
          <Input
            label='Full Name'
            type='text'
            placeholder='Goodness Dare'
            error={true}
          />
          <Textarea label='Description' placeholder='type here' />
          <EmailInput label='E-mail' />
          <DateInput label='Date' />
          <DateTimeInput label='Date and Time' />

          <Input label='Password' type='password' placeholder='********' />
          <NumberInput label='Number' />
          <DecimalInput label='Decimal' />

          <SelectInput label='States' options={options} />
          <Autocomplete label='Country' suggestions={suggestions} />
          <FileUpload label='Upload' />
          <RadioInput label='Personal' />
          <CheckboxInput label='On' />
          <DateRangeInput ranges={selectionRange} />
        </div>
      </div>
    </div>
  );
}

export default App;
