type TypeInput = 'email' | 'text' | 'number';

export interface InputProps {
  label: string;
  id: string;
  type: TypeInput;
  title: string;
  placeholder: string;
  pattern?: string;
}
