import { InputProps as Props } from './types/Input';

const Input: React.FC<Props> = ({ id, type, title, placeholder, pattern }) => {
  return (
    <input
      id={id}
      type={type}
      title={title}
      placeholder={placeholder}
      pattern={pattern}
    />
  );
};

export default Input;
