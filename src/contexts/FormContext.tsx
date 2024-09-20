import React, { createContext, useState } from 'react';

interface FormContextProps {
  inputValues: { [key: string]: string };
  inputErrors: { [key: string]: string };
  setInputValue: (id: string, value: string) => void;
  setInputError: (id: string, error: string) => void;
  resetForm: () => void;
}
export const FormContext = createContext<FormContextProps | null>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});
  const [inputErrors, setInputErrors] = useState<{ [key: string]: string }>({});

  const setInputValue = (id: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  const setInputError = (id: string, error: string) => {
    setInputErrors((prev) => ({ ...prev, [id]: error }));
  };

  const resetForm = () => {
    setInputValues({});
    setInputErrors({}); // Resetear los errores también
  };

  return (
    <FormContext.Provider
      value={{
        inputValues,
        inputErrors,
        setInputValue,
        setInputError,
        resetForm,
      }}>
      {children}
    </FormContext.Provider>
  );
};
