import { TextAreaProps } from '../types/Textarea';

const ATTRIBUTES_TEXTAREA: Array<TextAreaProps> = [
  {
    label: 'Mensaje',
    id: crypto.randomUUID(),
    title: 'Debes ingresar un mensaje (máx. 254 caracteres)',
    placeholder: 'Ingresa el mensaje detallando los requerimientos del asunto',
    pattern: '^.{1,254}$',
  },
] as const;

export default ATTRIBUTES_TEXTAREA;
