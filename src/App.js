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
import 'rsuite/dist/rsuite.min.css';

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

function App() {
  return (
    <>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            background: 'white',
            width: '900px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '40px',
          }}
        >
          <Input
            label='Full Name'
            type='text'
            placeholder='Goodness Dare'
            error={true}
          />
          <Textarea
            label='Description'
            error={true}
            errorText='Errorcheck your field'
          />
          <EmailInput label='E-mail' placeholder='E-mail' />
          <DateInput label='Date' placeholder='Date' />
          <DateTimeInput label='Date and Time' placeholder='Date and Time' />

          <Input label='Password' type='password' placeholder='Password' />
          <NumberInput label='Number' />
          <DecimalInput label='Decimal' />

          <SelectInput label='States' options={options} />
          <Autocomplete label='Country' suggestions={suggestions} />
          <FileUpload label='Upload' />
          <RadioInput label='Personal' />
          <CheckboxInput label='On' />
          <DateRangeInput ranges={[]} hoverRange='week' />
        </div>
      </div>
    </>
  );
}

export default App;
