import type React from 'react';
import Buttons from './Buttons';
import FormEmail from './FormEmail';
import Inputs from './Inputs';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';

const SimulatorEmailApp: React.FC = () => {
  return (
    <FormEmail>
      <Inputs />
      <Buttons />
    </FormEmail>
  );
};

export default SimulatorEmailApp;
