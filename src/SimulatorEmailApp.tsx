import type React from 'react';
import ButtonGroup from './components/ButtonGroup';
import FormEmail from './components/FormEmail';
import InputGroup from './components/InputGroup';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';

const SimulatorEmailApp: React.FC = () => {
  return (
    <FormEmail>
      <InputGroup />
      <ButtonGroup />
    </FormEmail>
  );
};

export default SimulatorEmailApp;
