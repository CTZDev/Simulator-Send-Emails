import { InputProps } from '../types/Input';

const ATTRIBUTES_INPUTS: Array<InputProps> = [
  {
    label: 'Email',
    id: crypto.randomUUID(),
    type: 'email',
    title: 'Debes ingresar un email válido',
    placeholder: 'Ingresa tu email: carlosteran@gmail.com',
    pattern: '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$',
  },
  {
    label: 'Asunto',
    id: crypto.randomUUID(),
    type: 'text',
    title: 'Debes ingresar un asunto (máx. 100 caracteres)',
    placeholder: 'Ingresa el asunto de tu necesidad',
    pattern: '^.{1,100}$',
  },
] as const;

export default ATTRIBUTES_INPUTS;
