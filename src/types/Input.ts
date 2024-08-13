type TypeInput = 'email' | 'text' | 'number';

export interface InputProps {
  id: string;
  type: TypeInput;
  title: string;
  placeholder: string;
  pattern?: string;
}
