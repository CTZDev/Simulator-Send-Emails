import { InputProps } from '../types/Input';

const ATTRIBUTES_INPUTS: Array<InputProps> = [
  {
    label: 'Email',
    id: crypto.randomUUID(),
    type: 'email',
    title: 'Debes ingresar un email válido',
    placeholder: 'Ingresa tu email: carlosteran@gmail.com',
    pattern: '{10}',
  },
  {
    label: 'Asunto',
    id: crypto.randomUUID(),
    type: 'text',
    title: 'Debes ingresar un asunto',
    placeholder: 'Ingresa el asunto de tu necesidad',
    pattern: '{10}',
  },
  {
    label: 'Mensaje',
    id: crypto.randomUUID(),
    type: 'text',
    title: 'Debes ingresar un mensaje',
    placeholder: 'Ingresa tu mensaje especificando tus requerimientos',
    pattern: '{10}',
  },
] as const;

export default ATTRIBUTES_INPUTS;
