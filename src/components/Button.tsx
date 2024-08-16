import { ButttonProps as Props } from '../types/Button';

const Button: React.FC<Props> = ({ id, type, content, className }) => {
  return (
    <button
      type={type}
      id={id}
      className={`${className} p-2.5 w-44 border rounded-lg text-base font-semibold md:text-lg`}>
      {content}
    </button>
  );
};

export default Button;
