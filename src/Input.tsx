import { InputProps as Props } from './types/Input';

const Input: React.FC<Props> = ({
  label,
  id,
  type,
  title,
  placeholder,
  pattern,
}) => {
  return (
    <div className='form-control flex flex-col text-clr-primary'>
      <label htmlFor={id} className='font-semibold pb-2.5'>
        {label}:{' '}
      </label>
      <input
        className='px-4 py-2 border-2 border-slate-200 rounded-lg text-clr-secondary font-normal focus:outline-none focus:border-clr-info focus:border-2'
        name={id}
        id={id}
        type={type}
        title={title}
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
};

export default Input;
