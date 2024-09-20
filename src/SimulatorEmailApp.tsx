import type React from 'react';
import ButtonGroup from './components/ButtonGroup';
import FormEmail from './components/FormEmail';
import InputGroup from './components/InputGroup';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import { FormProvider } from './contexts/FormContext';
import { useState } from 'react';

const SimulatorEmailApp: React.FC = () => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <FormProvider>
      <FormEmail setIsFormValid={setIsFormValid}>
        <InputGroup />
        <ButtonGroup isFormValid={isFormValid} />
      </FormEmail>
    </FormProvider>
  );
};

export default SimulatorEmailApp;
